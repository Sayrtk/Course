// сложение

let a = 'hello';
let b = true;
console.log(a + b);

let a1 = 'hello';
let b1 = 10;
console.log(a1 + b1);

let a2 = 5;
let b2 = true;
console.log(a2 + b2);

//умножение

let c = 'hello';
let d = true;
console.log(c * d);

let c1 = 'hello';
let d1 = 5;
console.log(c1 * d1);

let c2 = 5;
let d2 = true;
console.log(c2 * d2);


//деление

let f = 'hello';
let g = true;
console.log(f / g);

let f1 = 'hello';
let g1 = 5;
console.log(f1 / g1);

let f2 = 5;
let g2 = true;
console.log(f2 / g2);


// 4. явное преобразование

// a. Number to string

let value;
value = (10).toString();

console.log(value);
console.log(typeof value);

// b. String to number

let str = '11';
console.log(typeof str);

let num = Number(str);
console.log(typeof num);

// c. Boleen to string 

let value1 = true;
console.log(typeof value1);

value1 = String(value1); //'string(value)' function, value => string 
console.log(typeof value1);

