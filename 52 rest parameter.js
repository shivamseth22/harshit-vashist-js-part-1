function addAll(...numbers){
    // console.log(`a is ${a}`);
    // console.log(`b is ${b}`);
    // console.log(`c is ${c}`);
    // return numbers;
    let total = 0;
    for(let number of numbers){
        total= total +number;
        }
        return total;
} 
const ans = addAll(4,5);
console.log(ans);