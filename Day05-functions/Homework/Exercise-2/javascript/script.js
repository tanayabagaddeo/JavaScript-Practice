//1. Write a program to calculate the area of a triangle using a function. 
//2. Write a program to calculate the circumference using a function.
//3. Write a program to find the perimeter of a rectangle using a function.

let tHeight = parseFloat(prompt("Enter the height of triangle"));
let tBase = parseFloat(prompt("Enter the base of triangle"));
let triangleArea = (tht, tBs)=> (tht*tBs)/2;
console.log(`Area of triangle with height as ${tHeight} and base as ${tBase} is ${triangleArea(tHeight, tBase)}`);
document.getElementById("triA").innerText = `Area of triangle with height as ${tHeight} and base as ${tBase} is ${triangleArea(tHeight, tBase)}`;

let r=parseFloat(prompt("Enter the radius of a circle"));
let circumference = r => 2*3.14*r;
console.log(`Circumference of a circle with radius ${r} is ${circumference(r)}`);
document.getElementById("c").innerText = `Circumference of a circle with radius ${r} is ${circumference(r)}`;

let l=parseFloat(prompt("Enter the length of a rectangle"));
let w=parseFloat(prompt("Enter the width of a rectangle"));
perimeter(l,w);

function perimeter(ln, wd){
    let perimeter = 2*(ln+wd);
    console.log(`Perimeter of a rectangle with length ${ln} and width ${wd} is ${perimeter}`);
    document.getElementById("peri").innerText = `Perimeter of a rectangle with length ${ln} and width ${wd} is ${perimeter}`
}