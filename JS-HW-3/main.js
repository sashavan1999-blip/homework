for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

const num = +prompt("Введите число, что бы я показал его факториал");

let factorial = 1;

for (let i = num; i > 0; i--) {
    factorial = factorial * i;
}
console.log(factorial);

let grid = "#";
let space = " ";

for (let i = 1; i <= 8; i++) {
    let line = "";

    for (let j = 1; j <= 16; j++) {
        if (j % 2 === 1) {
            line += grid;
        } else {
            line += space;
        }
    }

    console.log(line);
}