// 3. Дан массив с числами [1, -2, 3, 0, 4, -5, 6, -11]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел

let arr = [1, -2, 3, 0, 4, -5, 6, -11];

function func(elem) {
    return elem > 0
};

let newArr = arr.filter(func);
console.log(newArr);

let result = newArr.map(function (elem) {
    return Math.sqrt(elem)
});

console.log(result);

