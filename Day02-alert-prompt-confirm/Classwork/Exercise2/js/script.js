let EmpName = prompt("Enter your name");
console.log(EmpName);
let baseSalary = parseInt(prompt("Enter your basic salary"));
console.log(`Base salary of ${EmpName} is ${baseSalary}`); 
let grosSalery = baseSalary + (baseSalary*0.4);
console.log(`Gross salary of ${EmpName} is ${grosSalery}`);