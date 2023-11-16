console.log("Second task")
const userInput = prompt("Please enter any value:");
if (userInput !== null) {
    if (!isNaN(userInput)) {
        alert("You entered a number.");
    } else if (userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false") {
        alert("You entered a boolean.");
    } else if (typeof userInput === "string") {
        alert("You entered a string.");
    } else {
        alert("You entered a complex data.");
    }
} else {
    alert("User canceled the prompt.");
}
