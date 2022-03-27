// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2,
// а затем найдет сумму полученных чисел и выведет на экран.

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNum1() {
    return new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {
            console.log(random);
            resolve(random);
        }, 3000);
    })
}

function getNum2() {
    return new Promise((resolve, reject) => {
        let random = getRandom(6, 10);
        setTimeout(() => {
            console.log(random);
            resolve(random);
        }, 5000);
    })
}

async function getNumbers() {
    let num1 = await getNum1();
    let num2 = await getNum2();
    console.log(num1 + num2);
    return num1 + num2;
}

getNumbers(); 
