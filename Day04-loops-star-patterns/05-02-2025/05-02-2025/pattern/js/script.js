let count = parseInt(prompt("Enter number of row and columns"));

if (count % 2 === 0) {
  count = count - 1;
}


for (let row = 1; row <= count; row++) {
  for (let col = 1; col <= count; col++) {
    if (row == 1 || col == count || col == 1 || row == count || row == col || col == (count - row) + 1) {
      document.write('*');
      // document.write(`(${row},${col})`);
    } else {
      // document.write(`<span> (${row},${col}) </span>`);

      document.write('<span>*</span>');
      // document.write('&nbsp;  ');
    }

  }
  document.write("<br/>");
}


// for (let row = 1; row <= 9; row++) {
//   for (let col = 1; col <= 9; col++) {
//     if (col == 1 || row == 9 || row == col) {
//       document.write('*');
//     } else {
//       document.write('<span>*</span>');
//     }

//   }
//   document.write("<br/>");
// }

// for (let row = 1; row <= 9; row++) {
//   for (let col = 1; col <= row; col++) {
//     // document.write(`( ${row}${col} )`);
//     document.write("*");
//   }
//   document.write("<br/>");
// }