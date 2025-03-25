//Write a program to print squares of numbers from 1 to 20 using for loop

for (let count = 1; count <= 20; count++) {
    console.log("Square of " + count + " is: " + (count*count));

document.getElementById("squers").innerText += "Square of " + count + " is: " + (count*count);
 document.getElementById("squers").innerHTML += "<br>";
}
