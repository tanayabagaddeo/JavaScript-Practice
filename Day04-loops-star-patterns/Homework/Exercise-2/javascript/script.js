//Write a program to print the sum of even numbers and odd numbers between 1 to 30.

let count = 1;
let sumEven = 0;
let sumOdd = 0;

while(count<=30){
    if(count%2===0){
        sumEven += count;   
    }else{
        sumOdd += count; 
    }
    count++;
}
console.log('Sum of even numbers between 1 to 30 is: ' + sumEven);
console.log('Sum of odd numbers between 1 to 30 is: ' + sumOdd);
document.getElementById("sumEven").innerText = 'Sum of even numbers between 1 to 30 is: ' + sumEven;
document.getElementById("sumOdd").innerText = 'Sum of odd numbers between 1 to 30 is: ' + sumOdd;