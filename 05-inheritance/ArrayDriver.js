"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 20, 30);
var myRect = new Rectangle_1.Rectangle(0, 0, 50, 100);
// Declear Array of Shape ---- initinally empty
var theShape = [];
// Add the shapes to array
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRect);
for (var _i = 0, theShape_1 = theShape; _i < theShape_1.length; _i++) {
    var tempShape = theShape_1[_i];
    console.log(tempShape.getInfo());
}
