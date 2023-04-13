//nested destructuring
const users = [
    {userId: 1, firstName: 'shivam',gender:"male"},
    {userId: 2, firstName: 'deepak',gender:"male"},
    {userId: 3, firstName: 'ram',gender:"male"},
]
const [{firstName:userFirstName} , , {gender}] = users;
console.log(userFirstName, gender);


