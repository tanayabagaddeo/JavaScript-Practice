// Write a program to calculate the area of a circle using a function.

let r = parseInt(prompt("Enter the radius of a circle"));

function area(rad){
  let area = 3.14*rad*rad;
  console.log("Area of circle with radious " + rad + " is: " + area);
}

area(r);