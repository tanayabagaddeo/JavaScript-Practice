//Print sum of 1 to 10 numbers using while loop

let count = 1;
let sum = 0;
while(count<=10){
    sum += count;
    count++;
}
console.log('sum of 1 to 10 numbers is: ' + sum);
document.getElementById("result").innerText = 'sum of 1 to 10 numbers is: ' + sum;