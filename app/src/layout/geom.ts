import * as PIXI from "pixi.js";

// Set a default alpha-value for most shapes 
const ALPHA = 0.25;

enum ShapeType {
  Rect = "RECT",
  Poly = "POLY",
}

type PolyArgs = {
  points: Array<number>; // FIXME: real version can also be `PIXI.IPointData`
};

type RectArgs = {
  x: number;
  y: number;
  width: number;
  height: number;
};
type Point = {
  x: number;
  y: number;
};
const newPixiShape = (tp: ShapeType, args: any) => {
  if (tp === ShapeType.Rect) {
    const rargs = args as RectArgs;
    const { x, y, width, height } = rargs;
    return new PIXI.Rectangle(x, y, width, height);
  }
  if (tp === ShapeType.Poly) {
    const rargs = args as PolyArgs;
    return new PIXI.Polygon(rargs.points);
  }
  throw new Error("Unknown shape type");
};
export class Layer {
  name: String;
  shapes: Array<Shape>;
  paths: Array<Path>;
  num: number;
  color: number;
  ctr: PIXI.Container;

  constructor(args: any) {
    this.shapes = [];
    this.paths = [];
    this.name = args.name;
    this.num = args.num;
    this.color = args.color || 0xffffff;
    let ctr = new PIXI.Container();

    ctr.interactive = true;
    ctr.visible = true;
    ctr.buttonMode = true;
    this.ctr = ctr;
  }
  createShape(tp: ShapeType, args: any) {
    const shape = new Shape(tp, this, args);
    this.shapes.push(shape);
    this.ctr.addChild(shape.gr);
    return shape;
  }
  createRect(args: any) {
    return this.createShape(ShapeType.Rect, args);
  }
  createPolygon(args: any) {
    return this.createShape(ShapeType.Poly, args);
  }
  addPath(path: Path) {
    return this.paths.push(path);
  }
}

export class Shape {
  layer: Layer; // Layer ref
  tp: ShapeType; // Enumerated shape-types
  raw: PIXI.Rectangle | PIXI.Polygon; // The raw PIXI shape object
  args: any;
  gr: PIXI.Graphics;

  constructor(tp: ShapeType, layer: Layer, args: any) {
    this.tp = tp;
    this.layer = layer;
    this.args = args;

    let gr = new PIXI.Graphics();
    this.gr = gr;
    gr.interactive = true;
    gr.visible = true;
    gr.buttonMode = true;

    layer.ctr.addChild(gr);
    gr.beginFill(layer.color, ALPHA);
    gr.lineStyle(10, layer.color, 1);

    this.raw = newPixiShape(tp, args);
    // this.raw.interactive = true; // FIXME: is this a thing?
    gr.drawShape(this.raw);
  }
}
export class Path {
  layer: Layer; // Layer ref
  width: number;
  gr: PIXI.Graphics;

  constructor(layer: Layer, width: number, points: Array<any>) {
    this.layer = layer;
    this.width = width;

    let gr = new PIXI.Graphics();
    this.gr = gr;
    gr.interactive = true;
    gr.visible = true;
    gr.buttonMode = true;

    layer.ctr.addChild(gr);

    // Draw our path
    gr.beginFill(layer.color);
    gr.lineStyle(width, layer.color, ALPHA);
    const pt = points[0] as Point;
    gr.moveTo(pt.x, pt.y);
    for (const p of points.slice(1)) {
      const pt = p as Point;
      gr.lineTo(pt.x, pt.y);
    }
    gr.closePath();
    gr.endFill();
  }
}
