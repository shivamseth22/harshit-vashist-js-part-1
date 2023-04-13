//primtive vs reference data type

let num1= 6 ; 
let num2 = num1;
console.log("value of num1 is " , num1);
console.log("value of num1 is " , num2);
num1++;
console.log("after incrementing num1");
console.log("value of num1 is " , num1);
console.log("value of num1 is " , num2);

//refrence type
//array 
let array1 = ["item1", "item"];
let array2 = array1;

console.log("array1", array1);
console.log("array2", array2);

array1.push("item3");
console.log("after adding new element to array1  ");
console.log("array1", array1);
console.log("array2", array2);

//premitive data 

//premitive data store in stack 