
let result = 0;

for (year = 2000; year < 2022; year++) {
    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        if (date.getDay() === 5) {
            result++;

            if (date === date.getDay()) {
                break;
            }

        }
    }
}

console.log(result);

