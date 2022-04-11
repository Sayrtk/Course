// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

let array: number[] = [1, 2, 3, 4, 5, 6];

function changeOrder(x: number[]) {
    return x.reverse();
}
console.log(changeOrder(array));

// 2. найти максимальное значение числа в массиве ([3,67,15...])

let array2: number[] = [3, 67, 15];

function maxNumberInArray(x: number[]) {
    return x.sort((a: number, b: number) => b - a)[0];
}

console.log(maxNumberInArray(array2));

// 5. сортировка массива по возрастанию/убыванию

let array5: number[] = [2, 1, 5, 4, 3];

function sortUp(a: number, b: number) {
    return a - b;
}
console.log(array5.sort(sortUp).join(", "));

function sortDown(a: number, b: number) {
    return b - a;
}

console.log(array5.sort(sortDown).join(", "));


// 6. удалить из массива все повторяющиеся элементы

let array6: number[] = [1, 1, 2, 10, 2, 40, 50];

let a1 = array6.filter((item: number, index: number) => {
    return array6.indexOf(item) === index;
});

console.log(a1);

