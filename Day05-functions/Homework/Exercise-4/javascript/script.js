//Write a program to check if the number is prime or not using a function.

let number = parseInt(prompt("Enter a number"));

isPrime(number);

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log(number + " is not a prime number");
            return false;
        }
    }
    console.log(number + " is a prime number");
    return true;
}
