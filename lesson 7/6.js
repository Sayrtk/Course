// 6. удалить из массива все повторяющиеся элементы

let arr = [1, 1, 2, 10, 2, 40, 50];

let a1 = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
})
console.log(a1);


