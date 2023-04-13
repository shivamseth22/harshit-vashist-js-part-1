//nested if else

// let num = 15;

// if(num<15){
//     console.log("The number is smaller");
// }else if(num==15){
//     console.log("Your number is correct");
// }else{
//     console.log("The number is greater");
// }

let winningNumber = 19 ;
let userGuess= +prompt("Guess a number");
console.log(userGuess);

if(userGuess === winningNumber){
    console.log("You won");
}else{
    console.log("you lost")
}
