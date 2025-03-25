// Write a program to check whether the number is positive or negative using function

let num = parseInt(prompt("Enter the a number"));

function numberCheck(number){
  if(number>0){
    console.log(number + " is positive");
  }else{
    console.log(number + " is negative");
  }
 
}

numberCheck(num);