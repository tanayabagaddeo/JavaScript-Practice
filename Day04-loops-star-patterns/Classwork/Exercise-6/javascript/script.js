// //Write a program to print table of number given by the user.

let number = parseInt(prompt("Enter a number to print the table"));

for(let count=1; count<=10; count++){
  console.log(number*count);
  document.write(number*count);
  document.write("<br>");
}
