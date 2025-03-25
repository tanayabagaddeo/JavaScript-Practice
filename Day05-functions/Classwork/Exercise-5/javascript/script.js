// Write a program to print the square and cube of a number using a function.

let num = parseInt(prompt("Enter the a number"));

function square(number){
 let squareOfNum = number*number;
 console.log(`Square of ${number} is ${squareOfNum}`);
 document.write(`Square of ${number} is ${squareOfNum} <br>`);
}
function cube(number){
 let cubeOfNum = number*number*number;
 console.log(`Cube of ${number} is ${cubeOfNum}`);
 document.write(`Cube of ${number} is ${cubeOfNum}`);
}

square(num);
cube(num);