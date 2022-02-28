// 2. найти максимальное значение числа в массиве ([3,67,15...])

function maxNumberInArray(arr) {
    const max = Math.max(...arr);
    console.log(max);
    return max;
}

let array = [3, 67, 15];

maxNumberInArray(array);

// function MyMax(myarr) {
//     let al = myarr.length;
//     maximum = myarr[al - 1];
//     while (al--) {
//         if (myarr[al] > maximum) {
//             maximum = myarr[al]
//         }
//     }
//     return maximum;
// };
// let myArray = [3, 67, 15];
// let m = MyMax(myArray);
// console.log(m)

