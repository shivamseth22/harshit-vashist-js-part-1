//prameter destructuring

//used in object and react

const person = {
    firstName: "shivam",
    gender:"male"
}

// function printDetail(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
function printDetail({firstName ,gender}){
    console.log(firstName);
    console.log(gender);
}

printDetail(person);