// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат
// его работы на экран.

function getRand(num) {
    return Math.floor(Math.random() * num);
}

let promise = new Promise((resolve, reject) => {
    setTimeout(
        () => resolve(1)
        , getRand(5) * 1000)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(
        () => resolve(2)
        , getRand(5) * 1000)
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(
        () => resolve(3)
        , getRand(5) * 1000)
})

Promise.race([promise, promise2, promise3]).then(
    result => console.log(result)
);


