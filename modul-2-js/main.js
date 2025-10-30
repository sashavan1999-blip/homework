let user = {
    name: 'Alexander',
    heil: function(name) {
        return `Hi ${name}!`;
    }
};
console.log(user.heil('Alexandr Mitunevich'));
let users = [
    {name: 'Diana', role: 'user'},
    {name: 'Ioann', role: 'user'},
    {name: 'Alexandr', role: 'admin'},
    {name: 'Senya', role: 'user'}
];
let defUsr = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].role === 'user') {
        defUsr++;
    }
}
console.log(defUsr)



