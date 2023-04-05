var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code
let arr = new Array(input);

class Shape {
  constructor(name) {
    this.name = name;
  }
  calculatePerimeter(value1, value2, value3) {
    if (this.name == 'Circle') {
      console.log('Perimeter of a Circle: ' + 2 * 3.14 * value1);
    } else if (this.name == 'Square') {
      console.log('Perimeter of a Square: ' + 4 * value1);
    } else if (this.name == 'Triangle') {
      let sum = 1 * value1 + 1 * value2 + 1 * value3;
      console.log('Perimeter of a Triangle: ' + sum);
    }
  }

  calculateArea(value1, value2) {
    if (this.name == 'Circle') {
      console.log('Area of a Circle: ' + 3.14 * value1 * value1);
    } else if (this.name == 'Square') {
      console.log('Area of a Square: ' + value1 * value1);
    } else if (this.name == 'Triangle') {
      console.log('Area of a Triangle: ' + 0.5 * value1 * value2);
    }
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  displayCircleMeasurements() {
    super.calculatePerimeter(this.radius);
    super.calculateArea(this.radius);
  }
}

class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }

  displaySquareMeasurements() {
    super.calculatePerimeter(this.side);
    super.calculateArea(this.side);
  }
}

class Triangle extends Shape {
  constructor(name, side1, side2, side3, base, height) {
    super(name);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.base = base;
    this.height = height;
  }

  displayTriangleMeasurements() {
    super.calculatePerimeter(this.side1, this.side2, this.side3);
    super.calculateArea(this.base, this.height);
  }
}

var myArray = arr[0][0].split(',');
let obj1 = new Circle(myArray[0], myArray[1]);

var myArray = arr[0][1].split(',');
let obj2 = new Square(myArray[0], myArray[1]);

var myArray = arr[0][2].split(',');
let obj3 = new Triangle(
  myArray[0],
  myArray[1],
  myArray[2],
  myArray[3],
  myArray[4],
  myArray[5]
);

obj1.displayCircleMeasurements();
obj2.displaySquareMeasurements();
obj3.displayTriangleMeasurements();
