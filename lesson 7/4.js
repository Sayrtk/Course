// 4. даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function qualAndCount(firstNumber, secondNumber) {
    let qual = 0;
    let count = 0;
    for (let i = 0; i < firstNumber.length; i++) {
        if (firstNumber[i] === secondNumber[i]) {
            count++;
        }
        for (let j = 0; j < secondNumber.length; j++) {
            if (firstNumber[i] === secondNumber[j]); {
                qual++;
            }
        }
    }
    console.log(qual, count);
}
qualAndCount('3487', '3794')


