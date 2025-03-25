// Write a program to check the greater number among two numbers using a function.

// let num1 = parseInt(prompt("Enter number1"));
// let num2 = parseInt(prompt("Enter number2"));
// function greaterNumber(n1,n2){
//     if(n1>n2){
//         console.log(n1 + " is greater than " + n2);
//     }else{
//         console.log(n2 + " is greater than " + n1);
//     }
// }
// greaterNumber(num1, num2);


const comparison = () =>{
    let n1=parseInt(prompt("Enter first number"));
    let n2 = parseInt(prompt("Enter second number"));

    if(n1 > n2){
        console.log(`${n1} is largest number`);
    }else{
        console.log(`${n2} is the largest number`);
    }
}

comparison();