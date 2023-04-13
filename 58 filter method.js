const numbers =[1,3,74,86,543,97,7];


const isEven=function(number){
    return number%2===0
}
const evenNumbers =numbers.filter(isEven);

//filter will always return boolean value

console.log(evenNumbers)