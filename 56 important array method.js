// important array method 

//foreach
const array = [4,3,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`)
//     // console.log(`*2 = ${number*2}`);
// }

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);

// for(let i=0; i<array.length; i++){
//     // console.log(i)
//     myFunc(array[i],i);
// }

// array.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)
// });

array.forEach(function(number){
    console.log(number*3);
})

const users = [ 
    {firstName: "shivam", age:20},
    {firstName: "ram", age:21},
    {firstName: "shyam", age:22}
]

// user.forEach(function(user){
//     console.log(user.firstName ,user.age)
// });

users.forEach((user ,index)=>{
    console.log(user.firstName,index)
})

