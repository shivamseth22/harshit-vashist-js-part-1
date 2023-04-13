function singHappyBirtday(){
    console.log("Happy birthday to you....");
}

function sumThreeNumbers(number1 , number2 , number3){
    return number1 +number2 +number3;
}

const returnedValue =sumThreeNumbers(2,5,7);
// console.log(returnedValue);

// odd or even

function isEven(number){
    if(number%2==0){
        return true;
    }
    return false;
}
// console.log(isEven(3));

function firstchracter (anystring){
    return anystring[0];
}
// console.log(firstchracter("shivam"));


function findTarget(array , target){
    for(let i = 0 ; i<array.length ; i++){
        if(array[i]==target){
            return i ;
        }
    }  
    return -1;
}
const myArray = [1 ,3 ,6 ,8 ,10];
const ans =findTarget(myArray , 8);
console.log(ans);


