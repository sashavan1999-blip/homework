const firstName = "Alexander";
const lastName = "Mitunevich";
const isStudent = true;

const age = 26;
const currentYear = 2026;
const birthYear = currentYear - age;


console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}`);
// но он и без этого вывел тру, если просто имя переменной написать. Я думал если так написать он подсветит true цветом в консоли, тип не как строку.

// 123456789 false мой ответ. Я просто забыл что булевое пустое это тру.
let a = '123'
let b = +'456'
let c = Number('789')
let d = Boolean(0)
let e = Boolean(' ')
let result = a + b+ c + d + e
console.log(result)

