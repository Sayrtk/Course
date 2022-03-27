// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function getRandom() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

let promise = new Promise((resolve, reject) => {
    let random = getRandom();
    setTimeout(() => {
        console.log(random);
        resolve(random);
    }, random * 1000)
})

let promise2 = new Promise((resolve, reject) => {
    let random = getRandom();
    setTimeout(() => {
        console.log(random);
        resolve(random);
    }, random * 1000)
})

let promise3 = new Promise((resolve, reject) => {
    let random = getRandom();
    setTimeout(() => {
        console.log(random);
        resolve(random);
    }, random * 1000)
})


Promise.all([promise, promise2, promise3])
    .then((data) => {
        let sum = data.reduce((acc, next) => {
            return acc + next;
        })
        console.log(sum);
        return sum;
    })
