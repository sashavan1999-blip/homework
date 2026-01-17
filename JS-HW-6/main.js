const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: false },
    { name: 'Jane', age: 20, isAdmin: true },
]


users.push(
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
);

console.log(users)

function getUserAverageAge(array) {
    let Ages = users.length
    let allAges = 0
    array.forEach(function (obj) {
        allAges += obj.age
    })
    return allAges / Ages
}
console.log(getUserAverageAge(users))



function getAllAdmins(array) {
    let adminArea = []
    array.forEach(function (obj) {
        if (obj.isAdmin === true) {
            adminArea.push(obj)
        }
    })
    console.log(adminArea)
}

getAllAdmins(users)

function fitst(arr, n) {
    let firstFiveEl = [];
    if (n === 0) {
        firstFiveEl.push(arr[0]);
        return firstFiveEl;
    } else if (n > arr.length) {
        return firstFiveEl
    }
    for (let i = 0; i < n; i++) {
        firstFiveEl.push(arr[i]);
    }
    return firstFiveEl;
}
console.log(fitst(users, 5));