// 5. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Использовать рекурсию.

function isSumLess(num) {
    let sum = 0;
    let arr = String(num).split('');
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    if (sum > 9) {
        return isSumLess(sum);
    } else {
        return sum;
    }
}

let num = 5647;
let final_num = isSumLess(num);
console.log(isSumLess(num));
