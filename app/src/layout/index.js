import React, { Component, useState, useEffect } from "react";
import * as PIXI from "pixi.js";
import { Box, makeStyles } from "@material-ui/core";

import Store from "../template/Store";
import { sampleGds } from "./load";
import { Layer } from "./tbd";

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
      } else if (tp === "GdsTextElem") {
        // FIXME: handle text
      } else {
        throw new Error("BAD ELEMENT TYPE");
      }
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
    this.layers = null;
    this.parent = null;
    this.span = {
      x: { min: 0, max: 0 },
      y: { min: 0, max: 0 },
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
        cell.shapes.push(layer.polygon({ points }));
      } else if (tp === "GdsTextElem") {
        // FIXME: handle text
      } else {
        throw new Error("BAD ELEMENT TYPE");
      }
    }
    return cell;
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

// The DOM element that instatiates `LayoutManager` is referred to by id
// in at least a few places. Keep that ID around.
const LAY_MGR_PARENT_ID = "LAY_MGR_PARENT_ID";

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
    return document.getElementById(LAY_MGR_PARENT_ID);
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
  draw() {
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

    // Get the layer-stack
    // FIXME: this will eventually actually get layout from *somewhere*,
    // e.g. an API call, not from this in-source loader.
    this.layers = LayerManager.from_gds(sampleGds);
    this.layers.draw(stage);
    // Add all the layout geometry
    this.cell = LayoutCellManager.from_gds(sampleGds, this.layers);
    // Size the stage to initially "zoom fit"
    const size = {
      x: this.renderer.width,
      y: this.renderer.height,
    };
    this.cell.fit(stage, size);
    // And finally, actually draw it
    this.render();
  }
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
    this.renderer.view.addEventListener("mousemove", this.onDrag);
    this.renderer.view.addEventListener("mouseup", this.onDragEnd);
  };
  onDrag = (e) => {
    var dx = e.x - this.prevX;
    var dy = e.y - this.prevY;
    this.stage.position.x += dx;
    this.stage.position.y += dy;
    this.prevX = e.x;
    this.prevY = e.y;
    this.render();
  };
  onDragEnd = (_) => {
    this.renderer.view.removeEventListener("mousemove", this.onDrag);
  };
  onWheel = (e) => {
    if (e.deltaY > 0) {
      this.stage.scale.x += 0.025;
      this.stage.scale.y += 0.025;
    } else {
      // FIXME: this probably has to be a function of the layout size too,
      const newscale = this.stage.scale.x - 0.025;
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
    console.log(e);
  };
})();

///
/// LayoutWindowInner
///
/// A component which does essentially nothing of its own,
/// but serves as the bridge between React and Pixi.js layers.
///
/// Dynamic re-rendering is substantially to-be-competed.
/// `LayoutWindowInner` should re-render rarely -
/// essentially only on color-theme changes and, during debug, code re-loads.
/// Keeping it from re-drawing over itself every time is important;
/// keeping its re-rendering time low is less so. For now.
///
class LayoutWindowInner extends Component {
  /// Draw or re-draw the layout.
  /// Note this calls `reset` inline, removing any past drawing.
  draw = () => {
    LayoutManager.reset();
    LayoutManager.draw();
  };
  /// Draw on mount
  componentDidMount = () => this.draw();
  /// Re-draw on theme-change
  componentDidUpdate(prevProps) {
    if (prevProps.dark !== this.props.dark) {
      this.draw();
    }
  }
  /// Reset everything on unmount.
  componentWillUnmount = () => LayoutManager.reset();
  /// Nothing to render; all action happens in React lifecycle methods.
  render() {
    return null;
  }
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
});

/// # LayoutWindow
/// Instantiates the HTML/WebGL Canvas in which all Layout action happens
function LayoutWindow(props) {
  const classes = useStyles();
  const { dark } = props;
  return (
    <Box className={classes.root}>
      <div id={LAY_MGR_PARENT_ID} style={{ width: "100%", height: "100%" }} />
      <LayoutWindowInner dark={dark} />
    </Box>
  );
}

// Connect to the dark/light theme switch from the redux store.
//
// We'll look up the state of dark-mode via `getState`,
// But this ensures we re-render when its state changes.
//
// Note if the layout canvas stays transparent, we really don't need this.
//
export default Store.connect((state) => {
  if (!state.theme) {
    return { dark: false };
  }
  return { dark: state.theme.options.type === "dark" };
})(LayoutWindow);
