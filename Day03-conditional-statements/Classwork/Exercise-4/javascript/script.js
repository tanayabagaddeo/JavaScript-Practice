let num1 = parseInt(prompt('Enter first number'));
let num2 = parseInt(prompt('Enter second number'));
let num3 = parseInt(prompt('Enter third number'));

if(num1>num2){
    if(num1>num3){
        console.log(`First number ${num1} is the largest number.`);
    }else{
        console.log(`Third number ${num3} is the largest number.`);
    }
}else if(num2>num3){
    console.log(`Second number ${num2} is the largest number.`);
}else{
    console.log(`Third number ${num3} is the largest number.`);
}