// Q1. Print all the even numbers from 1 to 100 

// for(i=1; i<=100; i++){
//     let rem = i%2;
//     // console.log(rem);
//     if(rem==0){
//         console.log(i);
//     }
// }

//Q2. Create a game where you start with any random game number, ask user to keep guessing the number untill the user enters correct value.

let num = 8;
let guessedNum = prompt("Guess the number");

while(num != guessedNum){
  guessedNum = prompt("Oops!, try another number");    
}
console.log("Yes you are correct.");
