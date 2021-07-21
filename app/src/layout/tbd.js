import React, { Component, useState, useEffect } from "react";
import * as PIXI from "pixi.js";



export class Layer {
    constructor(args) {
      this.name = args.name;
      this.num = args.num;
      this.color = args.color || 0xffffff;
      let ctr = new PIXI.Container();
  
      ctr.interactive = true;
      ctr.visible = true;
      ctr.buttonMode = true;
      this.ctr = ctr;
    }
    rect(args) {
      const r = new Rect(this, args);
      return r;
    }
    polygon(args) {
      console.log(args);
      const r = new Poly(this, args);
      return r;
    }
  }
  export class Rect {
    constructor(layer, args) {
      console.log(args);
      const { x, y, width, height } = args;
  
      let gr = new PIXI.Graphics();
  
      layer.ctr.addChild(gr);
      gr.beginFill(layer.color);
      gr.lineStyle(10, layer.color, 1);
  
      const raw = new PIXI.Rectangle(x, y, width, height);
      raw.interactive = true;
      gr.drawShape(raw);
  
      gr.interactive = true;
      gr.visible = true;
      gr.buttonMode = true;
      // gr.on("pointerdown", () => {
      //   console.log("hit thing2");
  
      //   // Seemingly updating anything (e.g. our width) requires clearing the graphics object
  
      //   this.gr.clear();
      //   this.gr.beginFill(layer.color);
      //   this.gr.lineStyle(20, layer.color, 1);
      //   // raw.width += 50;
      //   this.layer.ctr.visible = !this.layer.ctr.visible;
      //   this.gr.drawShape(raw);
  
      //   renderer.render(stage);
      // });
  
      this.gr = gr;
      this.raw = raw;
      this.layer = layer;
    }
  }
  export class Poly {
    constructor(layer, args) {
      console.log(args);
      const { points } = args;
  
      let gr = new PIXI.Graphics();
  
      layer.ctr.addChild(gr);
      gr.beginFill(layer.color, 0.25);
      gr.lineStyle(10, layer.color, 1);
  
      const raw = new PIXI.Polygon(points);
      raw.interactive = true;
      gr.drawShape(raw);
  
      gr.interactive = true;
      gr.visible = true;
      gr.buttonMode = true;
      // gr.on("pointerdown", () => {
      //   console.log("hit thing2");
  
      //   // Seemingly updating anything (e.g. our width) requires clearing the graphics object
  
      //   this.gr.clear();
      //   this.gr.beginFill(layer.color, 0.25);
      //   this.gr.lineStyle(20, layer.color, 1);
      //   // raw.width += 50;
      //   this.layer.ctr.visible = !this.layer.ctr.visible;
      //   this.gr.drawShape(raw);
  
      //   renderer.render(stage);
      // });
  
      this.gr = gr;
      this.raw = raw;
      this.layer = layer;
    }
  }
  