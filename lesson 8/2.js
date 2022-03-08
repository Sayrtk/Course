// 2. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

function getArray() {
    let array = [];
    return function addRandomNumber() {
        let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (!array.includes(random)) {
            array.push(random);
        }
        if (array.length < 100) {
            addRandomNumber();
        }
        return array;
    }
}

let number = getArray();
console.log(number());

