// 5. сортировка массива по возрастанию/убыванию

let arr = [2, 1, 5, 4, 3]

function sortUp(a, b) {
    return a - b;
}

console.log(arr.sort(sortUp).join(", "));

function sortDown(a, b) {
    return b - a;
}

console.log(arr.sort(sortDown).join(", "));

