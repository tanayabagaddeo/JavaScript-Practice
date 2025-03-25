//Write a program to print squares of numbers from 1 to20

for(let count=1; count<=20; count++){
console.log("Square of " + count + " is " + count*count);
// document.getElementById("squersSum").innerText += "Square of " + count + " is " + count*count;
// document.getElementById("squersSum").innerHTML += "<br>";

document.getElementById("squersSum").innerHTML += (`Square of ${count} is ${count * count} <br> `);
}
