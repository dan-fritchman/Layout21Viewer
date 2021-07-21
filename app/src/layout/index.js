import React, { Component, useState, useEffect } from "react";
import * as PIXI from "pixi.js";
import Container from "@material-ui/core/Container";

import CenterLayout from "../template/layout/CenterLayout";
import { draw, getLayers } from "./load";

// Set some bootleg globals (for now)
let renderer = null;
let stage = null;

export function rerender() {
  renderer.render(stage);
}

const layout = (view) => {
  // This just about immediately needs PixiJS's "custom game engine" use case,
  // unless we want to re-render everything at the display frame rate
  // (and fry a few eggs on the GPU while at it).

  renderer = new PIXI.Renderer({
    view,
    backgroundColor: 0,
  });

  // Create the top-level "stage" Container
  stage = new PIXI.Container();
  stage.interactive = true;

  // Set up dragging to pan
  let prevX, prevY;
  // let width = appsize.x;
  // renderer.view.addEventListener("mousedown", function (e) {
  //   if (width < 500) {
  //     width += 100;
  //   } else {
  //     width -= 100;
  //   }
  //   renderer.resize(width, appsize.y);
  // });
  // renderer.view.addEventListener("mousedown", function (e) {
  //   console.log(renderer.backgroundColor);
  //   if (renderer.backgroundColor !== 0) {
  //     renderer.backgroundColor = 0;
  //   } else {
  //     renderer.backgroundColor = 0xFFFFFF;
  //   }
  //   renderer.render(stage);
  // });
  renderer.view.addEventListener("mousedown", function (e) {
    prevX = e.x;
    prevY = e.y;
    renderer.view.addEventListener("mousemove", onDrag);
    renderer.view.addEventListener("mouseup", onDragEnd);
  });
  const onDrag = (e) => {
    console.log("DRAGGIN");
    var dx = e.x - prevX;
    var dy = e.y - prevY;
    stage.position.x += dx;
    stage.position.y += dy;
    prevX = e.x;
    prevY = e.y;
    renderer.render(stage);
  };
  const onDragEnd = (e) => {
    renderer.view.removeEventListener("mousemove", onDrag);
  };
  renderer.view.addEventListener("wheel", (e) => {
    console.log("WHEEL");
    console.log(e);
    if (e.deltaY > 0) {
      stage.scale.x += 0.025;
      stage.scale.y += 0.025;
    } else {
      // FIXME: this probably has to be a function of the layout size too,
      const newscale = stage.scale.x - 0.025;
      if (newscale > 0) {
        stage.scale.x = newscale;
        stage.scale.y = newscale;
      }
    }
    console.log(stage.scale.x);
    renderer.render(stage);
  });

  getLayers();
  const size = {
    x: renderer.width,
    y: renderer.height,
  };
  draw(stage, size);

  renderer.render(stage);
  return renderer;
};

///
/// LayoutWindowInner
///
/// A component which does essentially nothing of its own,
/// but serves as the bridge between React and Pixi.js layers.
///
class LayoutWindowInner extends Component {
  componentDidMount = () => {
    const pixithing = document.getElementById("pixithing");
    layout(pixithing); // this has, well, some side effects
    // while (pixithing.firstChild) {
    //   pixithing.removeChild(pixithing.firstChild);
    // }
    // pixithing.appendChild(renderer.view);
  };
  componentWillUnmount = () => {
    stage.destroy();
    renderer.destroy();
    // const pixithing = document.getElementById("pixithing");
    // while (pixithing && pixithing.firstChild) {
    //   pixithing.removeChild(pixithing.firstChild);
    // }
  };
  render() {
    return null;
  }
}

///
/// LayoutWindow
///
/// Instantiates the HTML/WebGL Canvas in which all Layout action happens
///
function LayoutWindow(_) {
  return (
    <Container maxWidth={false}>
      <canvas id={"pixithing"} style={{ width: "100%", height: "100%" }}>
        <LayoutWindowInner />
      </canvas>
    </Container>
  );
}
document.addEventListener("keydown", onKeyDown);
function onKeyDown(e) {
  console.log(e);
}

export default LayoutWindow;
