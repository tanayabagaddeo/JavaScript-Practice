//Write a program to print sum of even numbers and odd numbers between 1 to 30 using for loop

let sumEven = 0;
let sumOdd = 0;
for(let count = 1; count<=30; count++){
    if(count%2 === 0){
        sumEven += count; 
    }else{
        sumOdd += count;
    }
}
console.log(`Sum of even numbers between 1 to 30 is: ${sumEven}`);
console.log(`Sum of odd numbers between 1 to 30 is: ${sumOdd}`);
document.getElementById("evenSum").innerText = `Sum of even numbers between 1 to 30 is: ${sumEven}`;
document.getElementById("oddSum").innerText = `Sum of odd numbers between 1 to 30 is: ${sumOdd}`;