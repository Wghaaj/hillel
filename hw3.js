'12' + 34  // "1234", тому що рядок '12' об'єднується з числом 34, яке автоматично перетворюється у рядок
12 + 34    // 46, тому що тут відбувається додавання двох чисел
100 / '10' // 10, тому що Рядок '10' автоматично перетворюється у число, і тому відбувається звичайне ділення 
100 * 'f'  // NaN, тому что f не може бути перетвореним на число 
'7' / null // Infinity, тому що рядок 7 автоматично перетворюється на число, але ділення на null призводить до infinityі



// '2' + '4' -> 6 (алгебраїчна сума)

console.log("'2' + '4' -> 6 (алгебраїчна сума)")

let result =  parseInt('2') + parseInt('4');
console.log(result)

let result1 =  Number('2') + Number('4');
console.log(result1)

let result2 = +'2' + +'4';
console.log(result2)




//7.2 / '1.2' -> 6 (ділення двох чисел)

console.log("7.2 / '1.2' -> 6 (ділення двох чисел)")

let result1_1 = 7.2 / parseFloat('1.2');
console.log(result1_1); 

let result2_1 = 7.2 / Number('1.2');
console.log(result2_1);

let result3_1 = 7.2 / +'1.2';
console.log(result3_1)





// 'this' + ' simple' + ' string' -> 'this simple string' (конкатенація строк)

console.log("'this' + ' simple' + ' string' -> 'this simple string' (конкатенація строк)")

let result1_2  = 'this' + ' simple' + ' string';
console.log(result1_2); 

let result2_2 = `${'this'}${' simple'}${' string'}`;
console.log(result2_2); 



//'answer' + ' is:' + '30' + 5 -> 'answer is 35' (сума з конкатенацією)

console.log("'answer' + ' is:' + '30' + 5 -> 'answer is 35' (сума з конкатенацією)")

let result1_3 = 'answer is: ' + (parseInt('30') + 5);
console.log(result1_3)

let result2_3 = `answer is: ${parseInt('30') + 5}`;
console.log(result2_3)

let result3_3 = 'answer is: ' + (+'30' + 5);
console.log(result3_3)

