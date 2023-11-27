// 1. Пошук максимального числа


// Пошук мінімума

// function min(a) {
//     if (a.length === 0) {
//         return null;
//     }

//     let minimum = a[0];

//     for (let i = 1; i < a.length; i++) {
//         if (a[i] < minimum) {
//             minimum = a[i];
//         }
//     }

//     return minimum ;
// }

// console.log(min([1, 7, 5, 6, 0]));       
// console.log(min([3, 1, -9, -3, 2, 8]));   
// console.log(min([])); 


// Додаткове питання 

//Пошук максимума 

// function max (b) {
//     if (b.length === 0) {
//         return null;
//     }

//     let maximum = b[0];

//     for (let x = 1; x < b.length; x++) {
//         if (b[x] > maximum) {
//             maximum = b[x];
//         }
//     }

//     return maximum;
// }


//Пошук мінімума і максимума

// function both(c) {
//     if (c.length === 0) {
//         return null;
//     }

//     let minimum = c[0];
//     let maximum = c[0];

//     for (let i = 1; i < c.length; i++) {
//         if (c[i] < minimum) {
//             minimum = c[i];
//         }
//         if (c[i] > maximum) {
//             maximum = c[i];
//         }
//     }

//     return { minimum, maximum };
// }




// 2.  Чи паліндром я?

// function isPalindrom(input) {
 
//     let len = input.length;

//     if (len === 0) {
//         return false;
//     }

//     let start = 0;
//     let end = len - 1;

//     while (start < end) {
//         if (input[start] !== input[end]) {
//             return false;
//         }

//         start++;
//         end--;
//     }

//     return true;
// }

// console.log(isPalindrom(''));      
// console.log(isPalindrom('b'));    
// console.log(isPalindrom('mom'));   
// console.log(isPalindrom('string')); 
// console.log(isPalindrom('bag'));   


// 3. Із строки у число

// function numFromString(inputString) {
//     let result = 0;
//     for (let i = 0; i < inputString.length; i++) {
//         const digit = inputString.charCodeAt(i) - '0'.charCodeAt(0);
//         result = result * 10 + digit;
//     }
//     return result;
// }

// console.log(numFromString('15'));     
// console.log(numFromString('376'));   
// console.log(numFromString('100500')); 

// Додаткове питання

// function customParseInt(inputString, base) {
//     let result = 0;
//     for (let i = 0; i < inputString.length; i++) {
//         const digit = inputString.charCodeAt(i) - '0'.charCodeAt(0);
//         result = result * base + digit;
//     }
//     return result;
// }

// console.log(customParseInt('101', 2));  
// console.log(customParseInt('101', 5));  
// console.log(customParseInt('101', 8));  


