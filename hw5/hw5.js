let userInput = prompt("Enter any value: ");
userInput=parseInt(userInput);
while (true) {
    if (!isNaN(userInput)) {
        let number = parseFloat(userInput);
        
        if (number >= 123) {
            alert("Wow, you've ended this endless cycle!");
            break;
          } else {
            alert("Should continue");
            userInput = prompt("Enter any value again: ");
          }
    
    }else {
        alert("Only numbers, please ");
        userInput= prompt("Enter any NUMBER, please");
    }
}