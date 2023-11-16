console.log("FizzBuzz Game");
let ans = prompt("Enter any number ");
ans = parseInt(ans); 

switch (true) {
    case ans % 3 === 0 && ans % 5 === 0:
        alert("FizzBuzz");
        break;
    case ans % 3 === 0:
        alert("Fizz");
        break;
    case ans % 5 === 0:
        alert("Buzz");
        break;
    default:
        alert("Non Divisible");
}
