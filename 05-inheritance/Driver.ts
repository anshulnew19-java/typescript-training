import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCircle = new Circle(5,20,30);
console.log(myCircle.getInfo());

let myRect = new Rectangle(0,0,50,100);
console.log(myRect.getInfo());