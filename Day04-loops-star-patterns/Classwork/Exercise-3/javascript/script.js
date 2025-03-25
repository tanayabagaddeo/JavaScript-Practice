// Print sum of 1 to 10 even numbers using while loop
let count = 1;
let sum = 0;
while (count <= 10) {
    if(count%2 === 0){
    sum = sum + count;
    }
    count++;
  }
  console.log(`Sum of even numbers between 1 to 10 is: ${sum}`);
  document.getElementById("even").innerText = `Sum of even numbers between 1 to 10 is: ${sum}`