// 4. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

let array = [1, 3, 54, 454, 33, 33]

function func(arr) {
    console.log(arr[0]);
    arr.shift();
    if (arr.length > 0) {
        func(arr);
    }
}

func(array); 