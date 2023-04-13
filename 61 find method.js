//find method 

const myArray = ["hello" , "shivam", "how","are","you"];

// function isLength3(string){
//     return string.length===3;
// }

// const ans = isLength3("cat");
// console.log(ans);

const ans = myArray.find((string)=>string.length===3);

console.log(ans);


const users =[
    {userId :1 , userName : "shivam"},
    {userId :2 , userName : "ram"},
    {userId :3 , userName : "vinit"},
    {userId :4 , userName : "hira"}
];

const myUser = users.find((user)=>{
    return user.userId===3
})

console.group(myUser)