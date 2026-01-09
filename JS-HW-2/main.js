// У меня плохо с математикой, по этому даже это задание мне сложновато.
// ----1-----
const number = 8

if (number % 2 === 0) {
    console.log('Число четное, все ок.')
} else if (number % 2 === 1) {
    console.log('Число нечетное, но все так же ок.')
} 
else if (number % 2 > 1 && number % 2 < 2) {
    console.log('Число не целое')
}
// // ================================================================

// // --------2---------

const age = 22
const discount = age < 18 ? '10%' : age >= 65 ? '20%' : '15%'; 
console.log(discount)

const discountTeens = '10%'
const discountBasic = '15%'
const discountOld = '20%'

// switch (age) {
//     case age < 18:
//         console.log(discountTeens);                       ЭТО МОЯ ПОПЫТКА СДЕЛАТЬ В СВИТЧ, Я УЖЕ ПОЧИТАЛ ПОЧЕМУ ОШИБКА И  ЧТО ТАК ДЕЛАТЬ НЕЛЬЗЯ
                                                            // НО ПОПЫТКА НЕ ПЫТКА
//         break;
//     case age == 18 && age < 65:
//         console.log(discountBasic);
//         break;
//     case age == 65 || age > 65:
//         console.log(discountOld);
//         break;

// }
// =============3===============
const userName = 'admin'
const psaword = '123456'
let user = prompt('Введите ваш статус','')
let youPassword = prompt('Введите ваш пароль','')

if (user === 'admin' && youPassword === "123456") {
    console.log('Доступ разрешен!')
} else {
    console.log('Доступ запрещен')
};



// ===============4============================



let pacWeight = Number(prompt('Введите вес посылки',''))
let typeDeliv = prompt('Введите тип доставки','')
let baseCost = 0
let cofic = 0



if (pacWeight <= 0) {
    console.log('Некорректный вес посылки')
} 
if (typeDeliv !=="Стандарт" && typeDeliv !=="Экспресс" && typeDeliv !=="Премиум") {
    console.log('Неверный тип доставки')
}

if (pacWeight <= 1) {
    baseCost = 5
} else if (pacWeight > 1 && pacWeight <= 5) {
    baseCost = 10
} else baseCost = 15 
console.log('базовая стоимость доставки: ' + baseCost + '$')

if (typeDeliv === "Стандарт") {
    cofic = 1
}
else if (typeDeliv === "Премиум") {
    cofic = 1.5
}
else if (typeDeliv === "Экспресс") {
    cofic = 2
}

let totalCost = baseCost * cofic
alert('Итоговая стоимость доставки: ' + totalCost + ' $')

