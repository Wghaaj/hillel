alert("Next game!")

let userInput1, userInput2;
let number1, number2;

while (true) {
  userInput1 = prompt("Enter first number:");
  if (!isNaN(userInput1)) {
    number1 = parseFloat(userInput1);
    break;
  } else {
    alert("Only numbers, please");
  }
}

while (true) {
  userInput2 = prompt("Enter second number: ");
  if (!isNaN(userInput2)) {
    number2 = parseFloat(userInput2);
    break;
  } else {
    alert("Only numbers, please");
  }
}

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
