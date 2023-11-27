let number;

do {
  let userInput = prompt("Enter any value: ");
  userInput = parseInt(userInput);

  if (!isNaN(userInput)) {
    number = parseFloat(userInput);

    if (number >= 123) {
      alert("Wow, you've ended this endless cycle!");
    } else {
      alert("Should continue");
    }
  } else {
    alert("Only numbers, please ");
  }
} while (!(number >= 123));

