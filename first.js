// Problem: Get a number from user using prompt and check if the number is multiple of 5 or not.

let num = prompt("Enter a number");
let x = num % 5;
console.log(x);
if( x == 0){
    console.log(num, " is a multiple of 5");
}else{
    console.log(num, " is not a multiple of 5");
}
console.log(num);