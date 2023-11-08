'12' + 34  // "1234", тому що рядок '12' об'єднується з числом 34, яке автоматично перетворюється у рядок
12 + 34    // 46, тому що тут відбувається додавання двох чисел
100 / '10' // 10, тому що Рядок '10' автоматично перетворюється у число, і тому відбувається звичайне ділення 
100 * 'f'  // NaN, тому что f не може бути перетвореним на число 
'7' / null // Infinity, тому що рядок 7 автоматично перетворюється на число, але ділення на null призводить до infinityі



// виведення 6 

console.log("виведення 6 ")

let result1 = 3 + 3;
console.log("1st result:", result1); 

let result2 = 12 - 6;
console.log("2nd result:", result2); 

let result3 = 2 * 3;
console.log("3rd result:", result3); 

let result4 = 12 / 2;
console.log("4th result:", result4);

let result5 = 6.0;
console.log("5th result:", result5); 

let result6 = Number(true) * 6;
console.log("6th result:", result6); 

let result7 = parseInt("6");
console.log("7th result:", result7);

let result8 = (4 + 2) * 1;
console.log("8th result:", result8); 




//виведення "this simple string"

console.log(" виведення this simple string")

let result1_1 = 'this' + ' simple' + ' string';
console.log("1st result:", result1_1); 

let result2_1 = `${'this'} ${'simple'} ${'string'}`;
console.log("2nd result:", result2_1);




// виведення "answer is 35"

console.log("виведення answer is 35")

let result1_2  = 'answer' + ' is' + (parseInt('30') + 5);
console.log("1st result:", result1_2); 

let result2_2 = `answer is ${parseInt('30') + 5}`;
console.log("2nd result:", result2_2); 

