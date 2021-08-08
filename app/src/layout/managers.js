import * as PIXI from "pixi.js";

import Store from "../template/Store";
import { loadSample } from "./load";
import { Layer, Path } from "./geom";

// Our color palette!
// Unclear how this isnt a library somewhere, like matplotlib's version.
// (Or we just haven't found it.)
const colors = [
  0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff, 0xffffff,
];

class LayerManager {
  constructor() {
    this.list = []; // FIXME: remove
    this.map = new Map();
    this.colornum = 0;
  }
  nextcolor = () => {
    const c = colors[this.colornum % colors.length];
    this.colornum += 1;
    return c;
  };
  setVisibility = (idx, val) => {
    const layer1 = this.list[idx];
    this.map.get(layer1.layernum).ctr.visible = !!val;
    // FIXME: whether to re-render here, or in the caller
  };
  /// Static / Classmethod to create a LayerManager from a (JSON-format) GDS Struct
  static from_gds = (gds) => {
    let mgr = new LayerManager();

    // Walk through each GDS element, collecting its layer-type pair,
    // Creating a layer for each.
    for (const e of gds.elems) {
      if (Object.keys(e).length !== 1) {
        throw new Error("BAD ELEMENT");
      }
      const tp = Object.keys(e)[0];
      const data = e[tp];
      if (tp === "GdsBoundary") {
        const num = data.layer; // FIXME: datatype

        if (!mgr.map.has(num)) {
          const color = mgr.nextcolor();
          mgr.list.push({
            index: mgr.list.length,
            layernum: num,
            color,
            enabled: true,
          });
          const layer = new Layer({ num, color });
          mgr.map.set(num, layer);
        }
      } else if ((tp === "GdsTextElem") | (tp === "GdsStructRef")) {
        // FIXME: handle these
      } else {
        throw new Error(`BAD ELEMENT TYPE ${tp}`);
      }
    }
    return mgr;
  };
  /// Static / Classmethod to create a LayerManager from a `layout21.raw.Cell` protobuf-defined Cell
  static from_proto = (cell) => {
    let mgr = new LayerManager();

    // Walk through each layer, collecting its layer-type pair
    for (const layershapes of cell.shapes) {
      const { number, purpose } = layershapes.layer;

      // FIXME: this probably isn't right, since we're grouping purposes together
      // Eventually store by both layer and purpose, and make a check like this.
      // if (mgr.map.has(number)) {
      //   throw new Error(`Repeat Layer Definition for: ${cell.name} Layer (${number}, ${purpose})`);
      // }
      if (mgr.map.has(number)) {
        continue;
      }
      const color = mgr.nextcolor();
      mgr.list.push({
        index: mgr.list.length,
        layernum: number,
        color,
        enabled: true,
      });
      const layer = new Layer({ num: number, color });
      mgr.map.set(number, layer);
    }
    return mgr;
  };
  /// Add each of our Layer-containers to the `stage`
  draw = (stage) => {
    for (const l of this.list) {
      stage.addChild(this.map.get(l.layernum).ctr);
    }
  };
}

class LayoutCellManager {
  constructor() {
    this.shapes = [];
    this.paths = [];
    this.layers = null;
    this.parent = null;
    this.span = {
      x: { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER },
      y: { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER },
    };
  }
  static from_gds(struct, layers) {
    const cell = new LayoutCellManager();
    cell.layers = layers;

    for (const e of struct.elems) {
      if (Object.keys(e).length !== 1) {
        throw new Error("BAD ELEMENT");
      }
      const tp = Object.keys(e)[0];
      const data = e[tp];
      if (tp === "GdsBoundary") {
        const num = data.layer; // FIXME: also us the datatype!
        const layer = layers.map.get(num);
        const points = data.xy;

        // Weave its min & max coordinates into our span
        const xvals = (arr) => arr.filter((_, i) => i % 2 === 0);
        const yvals = (arr) => arr.filter((_, i) => i % 2 === 1);
        cell.span.x.min = Math.min(cell.span.x.min, ...xvals(points));
        cell.span.x.max = Math.max(cell.span.x.max, ...xvals(points));
        cell.span.y.min = Math.min(cell.span.y.min, ...yvals(points));
        cell.span.y.max = Math.max(cell.span.y.max, ...yvals(points));

        // Actually draw the shape!
        const shape = layer.addShape("POLY", { points });
        cell.shapes.push(shape);
      } else if ((tp === "GdsTextElem") | (tp === "GdsStructRef")) {
        // FIXME: handle these
      } else {
        throw new Error(`BAD ELEMENT TYPE ${tp}`);
      }
    }
    return cell;
  }
  static from_proto(cell, layers) {
    const mgr = new LayoutCellManager();
    mgr.layers = layers;

    for (const layershapes of cell.shapes) {
      const { number, purpose } = layershapes.layer; // FIXME: also use the datatype!
      const layer = layers.map.get(number);
      // Add all the Rect-Elements
      for (const rect of layershapes.rectangles) {
        const { lowerLeft, width, height } = rect;
        const shape = layer.createShape("RECT", {
          x: lowerLeft.x,
          y: lowerLeft.y,
          width,
          height,
        });
        mgr.shapes.push(shape);
        // Update our span
        mgr.span.x.min = Math.min(mgr.span.x.min, lowerLeft.x);
        mgr.span.x.max = Math.max(mgr.span.x.max, lowerLeft.x + width);
        mgr.span.y.min = Math.min(mgr.span.y.min, lowerLeft.y);
        mgr.span.y.max = Math.max(mgr.span.y.max, lowerLeft.y + height);
      }
      // Add all the Polygon-Elements
      for (const poly of layershapes.polygons) {
        const { vertices } = poly;
        const shape = layer.createShape("POLY", {
          points: vertices,
        });
        mgr.shapes.push(shape);
        // Update our span
        mgr.span.x.min = Math.min(mgr.span.x.min, ...vertices.map((p) => p.x));
        mgr.span.x.max = Math.max(mgr.span.x.max, ...vertices.map((p) => p.x));
        mgr.span.y.min = Math.min(mgr.span.y.min, ...vertices.map((p) => p.y));
        mgr.span.y.max = Math.max(mgr.span.y.max, ...vertices.map((p) => p.y));
      }
      // Add all the Path-Elements
      for (const p of layershapes.paths) {
        const { width, points } = p;
        const path = new Path(layer, width, points);
        layer.addPath(path);
        mgr.paths.push(path);
      }
      // FIXME: add Instances!

      // Bail early once we get enough data
      if (mgr.shapes.length > 1000) {
        console.log("Enough shapes, bailing");
        break;
      }
      if (mgr.paths.length > 1000) {
        console.log("Enough paths, bailing");
        break;
      }
    }
    // for (const layer1 of layers.list) {
    //   const layer = layers.map.get(layer1.layernum);
    //   layer.ctr.cacheAsBitmap = true;
    // }
    return mgr;
  }
  fit = (stage, size) => {
    // Sort out scaling in a "zoom to fit" style
    // Scales to the longer dimension, plus 5% padding on either side
    // Note the x and y scale-factors are always set identically,
    // So layout geometry remains at its drawn aspect ratio,
    // even if this leaves screen real estate unutilized.
    const xspan = this.span.x.max - this.span.x.min;
    const yspan = this.span.y.max - this.span.y.min;

    let scaleinverse = yspan / size.y;
    let scaling_y = true;
    if (xspan / size.x > scaleinverse) {
      scaling_y = false;
      scaleinverse = xspan / size.x;
    }
    let xpos, ypos;
    if (scaling_y) {
      xpos = 0.5 * (size.x - xspan / scaleinverse);
      ypos = 0.05 * size.y;
    } else {
      xpos = 0.05 * size.x;
      ypos = 0.5 * (size.y - yspan / scaleinverse);
    }
    stage.position.set(xpos, ypos);
    const scalefactor = 0.9 / scaleinverse;
    stage.scale.set(scalefactor, scalefactor);
  };
}

///
/// # LayoutManager
///
/// The singleton/ global manager of:
/// * A single LayoutCell, and its component geometries
/// * A single LayerManager, its settings and shape-groups
/// * The PIXI stage and renderer which draw them
///
export const LayoutManager = new (class {
  constructor() {
    this.layers = null;
    this.cell = null;
    this.renderer = null;
    this.stage = null;
  }
  /// Property to access our parent DOM element
  get parent() {
    return document.getElementById(this.parentId);
  }
  get parentId() {
    return "LAY_MGR_PARENT_ID";
  }
  /// Getter for background color based on theme-options
  get backgroundColor() {
    let backgroundColor = 0xffffff;
    if (Store.getState()) {
      const tp = Store.getState().theme.options.type;
      if (tp === "dark") {
        backgroundColor = 0;
      }
    }
    return backgroundColor;
  }
  render() {
    this.renderer.render(this.stage);
  }
  draw = async () => {
    const parent = this.parent;
    // This just about immediately needs PixiJS's "custom game engine" use case,
    // unless we want to re-render everything at the display frame rate
    // (and fry a few eggs on the GPU while at it).

    // Create our renderer object
    const renderer = new PIXI.Renderer({
      width: parent.offsetWidth,
      height: parent.offsetHeight,
      // backgroundColor,
      transparent: true,
    });
    this.renderer = renderer;
    parent.appendChild(renderer.view);

    // Create the top-level "stage" Container
    const stage = new PIXI.Container();
    stage.interactive = true;
    this.stage = stage;

    // Set up a handful of event handlers
    this.renderer.view.addEventListener("mousedown", this.onMouseDown);
    this.renderer.view.addEventListener("wheel", this.onWheel);
    this.renderer.view.addEventListener("resize", this.onResize);
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("resize", this.onResize);

    // FIXME: this will eventually actually get layout from *somewhere*,
    // e.g. an API call, not from this in-source loader.
    const sample = await loadSample();

    // Get the layer-stack
    this.layers = LayerManager.from_proto(sample);
    this.layers.draw(stage);
    // Add all the layout geometry
    this.cell = LayoutCellManager.from_proto(sample, this.layers);
    // Size the stage to initially "zoom fit"
    const size = {
      x: this.renderer.width,
      y: this.renderer.height,
    };
    this.cell.fit(stage, size);
    // And finally, actually draw it
    this.render();
  };
  /// Reset everything. Destroy all Pixi/WebGL objects, remove all DOM elements.
  /// Overkill? Maybe.
  reset = () => {
    if (this.stage) {
      this.stage.destroy({ children: true });
      this.stage = null;
    }
    if (this.renderer) {
      this.renderer.destroy({ children: true });
      this.renderer = null;
    }
    const parent = this.parent;
    while (parent && parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    this.layers = null;
    this.cell = null;
  };
  onMouseDown = (e) => {
    this.prevX = e.x;
    this.prevY = e.y;
    window.addEventListener("mousemove", this.onDrag);
    window.addEventListener("mouseup", this.onDragEnd);
  };
  /// Dragging event handler. Move stage position.
  onDrag = (e) => {
    var dx = e.x - this.prevX;
    var dy = e.y - this.prevY;
    this.stage.position.x += dx;
    this.stage.position.y += dy;
    this.prevX = e.x;
    this.prevY = e.y;
    this.render();
  };
  /// Drag-release. De-register event handlers.
  onDragEnd = (_) => {
    window.removeEventListener("mousemove", this.onDrag);
    window.removeEventListener("mouseup", this.onDragEnd);
  };
  onWheel = (e) => {
    if (e.deltaY > 0) {
      const newscale = this.stage.scale.x * 0.9;
      this.stage.scale.x = newscale;
      this.stage.scale.y = newscale;
    } else {
      // FIXME: this probably has to be a function of the layout size too,
      const newscale = this.stage.scale.x * 1.1;
      if (newscale > 0) {
        this.stage.scale.x = newscale;
        this.stage.scale.y = newscale;
      }
    }
    this.render();
  };
  onResize = () => {
    console.log("RESIZING!!!");
    // renderer.view.style.width = parent.clientWidth;
    // renderer.resize(parent.clientWidth, parent.clientHeight);
  };
  onKeyDown = (e) => {
    if (e.key === "f") {
      // "zoom fit"
      const size = {
        x: this.renderer.width,
        y: this.renderer.height,
      };
      this.cell.fit(this.stage, size);
      this.render();
    }
  };
})();
