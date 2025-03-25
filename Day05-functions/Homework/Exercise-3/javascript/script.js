//Write a program to print the gross salary of the employee depending upon his basic salary using elseif and function.

let baseSalary = parseFloat(prompt("Enter your base salary"));

function grossSalary(baseSalary){
    let grosSalary = baseSalary + (baseSalary*0.2);
    console.log("Your gross salary is " + grosSalary );
}
grossSalary(baseSalary);