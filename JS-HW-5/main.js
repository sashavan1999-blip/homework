let person = {
    name: 'Alexandr',
    job: 'Security officer',
    age: 26,
    gender: 'Male',    
}
let personEnemy = {

}

function personValues(obj) {
    for (let key in obj) {
        console.log(obj[key])
    }
}

console.log(person.name, person.job, person.age, person.gender)
personValues(person)

// =======================================


function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        console.log('Пусто')
    } 
}

isEmpty(personEnemy)
// ======================


let task = {
    title: 'Делай',
    description: 'Бла бла бла',
    isCompleted: false,
}
let completedTask = {
    title: 'Сделано',
    description: 'Поплакал, но все сделал',
    isCompleted: true,
}

function appMod(obj, modification) {
    const result = {
        ...obj,
        ...modification
    }

    for (let key in result) {
        console.log(result[key])
    }

    return result
}

// let sashaTAsk = appMod(task, completedTask) 

// personValues(sashaTAsk)


