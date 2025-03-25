let basic = parseInt(prompt('Enter your basic salary'));
let bonus = basic * 0.2; //asuming bonus is 20% of the salary
let grossSalary = basic + bonus;
console.log(`Your gross salary is Rs. ${grossSalary}. This includes 20% bouns of Rs. ${bonus} on your basic salary of Rs. ${basic}`)