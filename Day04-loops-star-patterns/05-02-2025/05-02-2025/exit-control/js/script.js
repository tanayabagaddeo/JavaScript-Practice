
let count = 51;
let sum = 0;

do {
  if (count % 2 === 0) {
    sum += count;
  } 
  ++count;
} while (count <= 100);

console.log(sum);