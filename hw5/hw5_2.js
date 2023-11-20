alert("Next game!")

let userInput1, userInput2;
let number1, number2;

do {
  userInput1 = prompt("Enter first number:");
} while (isNaN(userInput1) && alert("Only numbers, please"));

number1 = parseFloat(userInput1);

do {
  userInput2 = prompt("Enter second number:");
} while (isNaN(userInput2) && alert("Only numbers, please"));

number2 = parseFloat(userInput2);

let sum = 0;
let product = 1;

for (let i = Math.min(number1, number2); i <= Math.max(number1, number2); i++) {
  if (i % 2 === 0) {
    product *= i;
  } else {
    sum += i;
  }
}

alert(`sum = ${sum}, product = ${product}`);
