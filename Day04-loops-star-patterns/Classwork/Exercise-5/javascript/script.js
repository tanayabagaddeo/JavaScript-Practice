// //Write a program to print odd numbers from 521 to 229 using a do___while loop.

// let initNum = 229;
// console.log("odd numbers from 521 to 229 are: ");
// do {
//   if (initNum % 2 !== 0) {
//     console.log(initNum);
//     document.write(initNum);
//   }
//   initNum++;
//   document.write('<br>');
// } while (initNum <= 529);

let initNum=521;

do{
  if(initNum%2 !== 0){
    console.log(initNum);
    document.getElementById("odd").innerHTML += initNum + "<br>";
  }
  initNum++;
}while(initNum<=529);