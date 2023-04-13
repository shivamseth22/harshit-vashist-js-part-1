// const array1 = [1,2,3];
// const array2= [3,4,5];

// // const newArray =[...array1 , ...array2 ,8 , 10];
// const newArray =[..."123456789"];

// console.log(newArray);

//spread operator in object

const obj1 = {
    key1:"value1",
    key2:"value2"
}
const obj2 = {
    key1:"newvalue", 
    key3:"value3",
    key4:"value4"
}
const newObject ={
    ...obj1 , ...obj2 ,key5:"value69"
}
console.log(newObject);