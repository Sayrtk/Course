// 1. Замыканием сделайте функцию, которая считает и выводит количество своих вызовов.

function counter() {
    let i = 1;
    return function () {
        console.log(i);
        return i++
    }
}

let func = counter();

func();
func();
func();