/// Load a sample layout and layer-set from file
import Store from "../template/Store";

import { Layer } from "./tbd";
// Sample layout data
import sample from "./sample1.json";
// Pick up its first cell/ struct
const struct = sample.structs[0];

// Some bootleg globals, at least for now!
export let layerMap = new Map();
export let layerList = [];

// Our color palette!
// Unclear how this isnt a library somewhere, like matplotlib's version.
// (Or we just haven't found it.)
const colors = [
  0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff, 0xffffff,
];
let colornum = 0;
function nextcolor() {
  const c = colors[colornum % colors.length];
  colornum += 1;
  return c;
}

/// Load up the layers in the sample layout
export function getLayers() {
  for (const [_idx, e] of struct.elems.entries()) {
    if (Object.keys(e).length !== 1) {
      throw new Error("BAD ELEMENT");
    }
    const tp = Object.keys(e)[0];
    const data = e[tp];
    if (tp === "GdsBoundary") {
      const num = data.layer; // FIXME: datatype

      if (!layerMap.has(num)) {
        const color = nextcolor();
        layerList.push({
          index: layerList.length,
          layernum: num,
          color,
          enabled: true,
        });
        const layer = new Layer({ num, color });
        layerMap.set(num, layer);
      }
    } else if (tp === "GdsTextElem") {
      // FIXME: handle text
    } else {
      throw new Error("BAD ELEMENT TYPE");
    }
  }
  Store.dispatch({ type: "UPDATE_LAYERS", layers: layerList });
}

export function draw(stage, size) {
  for (const l of layerList) {
    console.log(l);
    console.log(layerMap);

    stage.addChild(layerMap.get(l.layernum).ctr);
  }

  let xmin = 0;
  let xmax = 0;
  let ymin = 0;
  let ymax = 0;
  for (const [_idx, e] of struct.elems.entries()) {
    if (Object.keys(e).length !== 1) {
      throw new Error("BAD ELEMENT");
    }
    const tp = Object.keys(e)[0];
    const data = e[tp];
    if (tp === "GdsBoundary") {
      const num = data.layer; // FIXME: datatype
      const layer = layerMap.get(num);
      const points = data.xy;

      const xvals = (arr) => arr.filter((e, i) => i % 2 === 0);
      const yvals = (arr) => arr.filter((e, i) => i % 2 === 1);

      const shapexmin = Math.min(...xvals(points));
      const shapexmax = Math.max(...xvals(points));
      const shapeymax = Math.max(...yvals(points));
      const shapeymin = Math.min(...yvals(points));
      if (shapexmin < xmin) {
        xmin = shapexmin;
      }
      if (shapexmax > xmax) {
        xmax = shapexmax;
      }
      if (shapeymin < ymin) {
        ymin = shapeymin;
      }
      if (shapeymax > ymax) {
        ymax = shapeymax;
      }

      // Actually draw the shape!
      layer.polygon({ points });
    } else if (tp === "GdsTextElem") {
      // FIXME: handle text
    } else {
      throw new Error("BAD ELEMENT TYPE");
    }
  }

  // Sort out scaling in a "zoom to fit" style
  // Scales to the longer dimension, plus 5% padding on either side
  // Note the x and y scale-factors are always set identically,
  // So layout geometry remains at its drawn aspect ratio,
  // even if this leaves screen real estate unutilized.
  const xspan = xmax - xmin;
  const yspan = ymax - ymin;
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
}
