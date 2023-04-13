//array push pop
let fruits =["apple", "mango", "guava"];

//push
// fruits[3]="banana";

console.log(fruits);
fruits.push("banana");
console.log(fruits);  
//pop
let poppedfruits =fruits.pop();
console.log(fruits);

console.log(poppedfruits);

//unshift
fruits.unshift("orange");
console.log(fruits);
fruits.shift();
console.log(fruits);

let removedfruits = fruits.shift();
console.log(removedfruits);
