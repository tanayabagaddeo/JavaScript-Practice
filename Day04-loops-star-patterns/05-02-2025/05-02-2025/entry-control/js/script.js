// addition from 51 to 100

// let count = 51;
// let sum = 0;

// while(count < 101) {
//   sum += count
//   ++count 
// }

// while (count <= 100) {
//   if (count % 5 === 0) {
//     sum += count;
//   }

//   ++count;
// }


// for(let count=51; count <= 100; count++){
//   sum += count
// }

// console.log(`Addition from 51 to 100 is ${sum}`);

let sumOfEvenNumber = 0;
let sumofOddNumber = 0;

for (let count = 51; count <= 100; count++) {
  if (count % 2 === 0) {
    sumOfEvenNumber += count;
  } else {
    sumofOddNumber += count;
  }
}

document.getElementById('sum').innerHTML = `<u>Sum of even number between 51 to 100 is ${sumOfEvenNumber}</u>`;
document.getElementById('odd').innerText = `Sum of odd number between 51 to 100 is ${sumofOddNumber}`;