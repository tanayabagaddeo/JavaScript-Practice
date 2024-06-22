// Q1] Prompt the user to enter his/her full name. Create a user name for them based on input. Sarting character should be 
// @ , followed by full name and ending with fullneme length
//Eg: @tanayabagaddeo14

// let fullName=prompt("Enter your full name without spaces");
// let len = fullName.length;
// let username= "@" + fullName + len;
// console.log(username);

// Arrays 
// Q1. For given array with marks of student, calculate the average marks of entire class.
// let marks=[85, 96, 74, 78, 45, 55];
// let sum=0;
// for (let i = 0; i < marks.length; i++) {
//    sum = sum + marks[i];  
// }
// let avg = sum/marks.length;
// console.log(`Sum of marks is ${sum}`); 
// console.log(`Average of marks is ${avg}`);

//Q2. For an array of prices of 5 items, all items have an offer of 10% off. Change the array to store final prioc after aplying offer

// let prices= [250, 350, 650, 700, 840, 50, 10];
//  for(i=0; i<prices.length; i++){
//      offerPrice = prices[i]/10;
//      prices[i]= prices[i] - offerPrice;
//  }
// console.log(`Discounted Price is ${prices}`);

// Q3. Create an array to store companies: Bloomberg, Microsoft, IBM, Google, Uber, Netflix
//  a] Remove the first company from an array
// b] Remove Uber and add Ola 
// c] Add Amezon at the end

let companies=["Bloomberg", "Microsoft", "IBM", "Google", "Uber", "Netflix"]

companies.splice(0, 1); // Remove the first company from an array
companies.splice(3, 1, "Ola"); //Remove Uber and add Ola
companies.push("Amazon"); //Add Amezon at the end
companies.shift();// Deltes element at first position
console.log(companies);
