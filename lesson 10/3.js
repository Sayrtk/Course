// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
// результата getNum, затем возводить его в квадрат и выводить на экран.


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNum() {
    return new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {
            console.log(random);
            resolve(random);
        }, 3000);
    })
}

async function quare() {
    let result = await getNum();
    console.log(result * result);
    return result * result;
}

quare();
