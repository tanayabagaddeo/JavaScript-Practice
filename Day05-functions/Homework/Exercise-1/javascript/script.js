//Write a program to calculate the addition, subtraction, multiplication, and division of two numbers in the same program using functions.

let num1 = parseInt(prompt("Enter number 1"));
let num2 = parseInt(prompt("Enter number 2"));

let add = (number1, number2) => number1 + number2;
let substract = (number1, number2) => number1 - number2;
let multiply = (number1, number2) => number1 * number2;
let devide = (number1, number2) => number1 / number2;

document.getElementById("optn").innerHTML = `Addition of ${num1} and ${num2} is ${add(num1, num2)} <br>`;
document.getElementById("optn").innerHTML += `Substraction of ${num1} and ${num2} is ${substract(num1, num2)} <br>`;
document.getElementById("optn").innerHTML += `Multiplication of ${num1} and ${num2} is ${multiply(num1, num2)} <br>`;
document.getElementById("optn").innerHTML += `Division of ${num1} and ${num2} is ${devide(num1, num2)} <br>`;