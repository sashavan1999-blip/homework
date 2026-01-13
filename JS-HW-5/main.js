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
appMod(task, completedTask)
// let sashaTAsk = appMod(task, completedTask) 

// personValues(sashaTAsk)




// Я делал это дз след образом. Первую задачу написал сам, вторую и последующие делал читая учебник по жс какого то чела из гугла и прося жпт мне что то объяснять. Я когда читал задания в дз, в голове понимал как это можно сделать, но когда начинал писать, понимал что что-то не понял, либо что-то забыл. Скидывал половину кода жпт и писал идею, потом сидел читал че он обьясняет и почему именно так надо. Пишу это, потому что не понимаю, так норм учится или надо сесть и тупо самому. Тип либо справился либо иди пересматривай видосы пока сам не справишься.
