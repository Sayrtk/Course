
let firstRandomNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let secondRandomNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

for (let i = 0; i < 3; i++) {
    if (firstRandomNum > secondRandomNum) {
        console.log('The Winner is User 1');
    } else if (firstRandomNum < secondRandomNum) {
        console.log('The Winner is User 2');
    } else {
        console.log('It is a Draw!');
    }
} 