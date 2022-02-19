// числа разбивки целые

let number = 15;
let a = number;
let parts = 3;
let partsArr = [];
let randSum = 0;

for (let i = 1; i < parts; i++) {
    let rand = Number((Math.random() * a).toFixed(0));
    partsArr.push(rand);
    randSum = randSum + rand;
    a = a - rand;
}

partsArr.push(Number(number - randSum).toFixed(0));

console.log(partsArr);

// числа разбивки с 2 знаками после запятой (запускать по очереди)

let number = 15;
let a = number;
let parts = 3;
let partsArr = [];
let randSum = 0;

for (let i = 1; i < parts; i++) {
    let rand = Number((Math.random() * a).toFixed(2));
    partsArr.push(rand);
    randSum = randSum + rand;
    a = a - rand;
}

partsArr.push(Number(number - randSum).toFixed(2));

console.log(partsArr);