//arrow function 
// const singHappyBirtday = function(){
//     console.log("Happy birthday to you....");
// }

const singHappyBirtday = () => {
    console.log("Happy birthday to you....");
}
singHappyBirtday();

const sumThreeNumbers = (number1 , number2 , number3) =>{
    return number1 +number2 +number3;
}
const returnedValue =sumThreeNumbers(2,5,7);
console.log(returnedValue);

const  isEven =number=> number%2==0;

console.log(isEven(4));
        