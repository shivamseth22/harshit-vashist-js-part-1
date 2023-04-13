//iterable

//jiispe hum for of loop laga sake
// string , array are iterable 


const firstName = "Shivam";

for(let char of firstName){
    console.log(char);
}

const items = ["item1", "item2","item3"];
for(let item of items){
    console.log(item);
}

// const users ={
//     "key1" : vlaue1,
//     "key2" : value2
//     console.log(item);
// }

//array like object 

// jinke pass length property hoti hai 
//aur jinko hum index se access kar sakte hai 
//example : string 

const myName = "shivam";
console.log(myName.length);
console.log(myName[2]);

//example :set
// stores data
//set also have its own method 
//No index-based access
//ordered is not guaranteed
//unique items only (No dublicates are allowed) 

const numbers = new Set([1,2,3]);
numbers.add(4);
console.log(numbers);


for(let number of numbers ){
    console.log(numbers);
}
//for checking a number is exist or not 

if(numbers.has(1)){
    console.log("prensent")
}else{
    console.log("absent")
}


console.log(numbers[4]);

const newArray =[1,2,3,3,4,4,5,6];

const uniqueArray =new Set(newArray);
console.log(uniqueArray);
console.log(newArray);

let length =0 ;
for(let element of uniqueArray){
    length++;
}

console.log(length);






