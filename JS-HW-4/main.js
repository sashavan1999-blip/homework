function calculateFinalPrice(baseCost, salePercent, taxAttack) {
        const saleprice = 1 - (salePercent / 100) 
        const taxx = (baseCost * saleprice) * taxAttack
        const finalPrice = baseCost * saleprice +  taxx

        return finalPrice

}
console.log(calculateFinalPrice(100, 10, 0))
console.log(calculateFinalPrice(100, 10, 0.2))
console.log(calculateFinalPrice(99, 20, 1))
console.log(calculateFinalPrice(122, 60, 2))




function checkAccess(name, password) {
    if (name === 'admin' && password === '123456') {
        return 'Доступ разрешен'
    } else {
        return 'Доступ запрещен'
    }
}

console.log(checkAccess('admin', '123456'))
console.log(checkAccess('admin', '1232456'))


function getTimeOfDay(time) {
    if (time >= 0 && time <= 5) {
        return 'Ночь'
    } 
    else if (time >= 6 && time <= 11) {
        return 'Утро'
    }
    else if (time >= 12 && time <= 17) {
        return 'День'
    }
    else if (time >= 18 && time <= 23) {
        return 'Вечер'
    }
    else {
        return 'Некорректное время'
    }
    
}
console.log(getTimeOfDay(3))
console.log(getTimeOfDay(6))
console.log(getTimeOfDay(12))
console.log(getTimeOfDay(18))
console.log(getTimeOfDay(24))


function findFirstEven(start, end) {
    for (let i = start; i <= end; i++){
        if (i % 2 === 0) {
            return i
        }
        
    }
    return 'Четных чисел нет'
}
console.log(findFirstEven(1, 9))
console.log(findFirstEven(7, 9))
console.log(findFirstEven(9, 9))