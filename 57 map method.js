const numbers =[4,3,6,7,5,4];

// const square =function(number){
//     return number*number;
// }
// const suqareNumbers =numbers.map(function(number){
//     return number*number;
// });

// console.log(suqareNumbers);

//map function aleays makes a new array 
const users = [ 
    {firstName: "shivam", age:20},
    {firstName: "ram", age:21},
    {firstName: "shyam", age:22}
]
 const userNames = users.map(user=>{
    return user.firstName;
 })
 console.log(userNames);