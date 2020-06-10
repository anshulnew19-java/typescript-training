import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myCircle = new Circle(5,20,30);
let myRect = new Rectangle(0,0,50,100);

// Declear Array of Shape ---- initinally empty
let theShape: Shape[] = [];

// Add the shapes to array
theShape.push(myCircle);
theShape.push(myRect);

for(let tempShape of theShape){
    console.log(tempShape.getInfo());
    console.log("Area = " + tempShape.calculateArea());
    console.log();
}