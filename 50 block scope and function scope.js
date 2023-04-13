

//let and const are block scope and var is a function scope
// {
//     let firstName = "shivam";
//     console.log(firstName);
// }
    
// {
//     var firstName = "shivam";
// }
//     console.log(firstName);
// {
//     const firstName = "ram";
// }
//     console.log(firstName);

// if(true){
//     let firstName = "shivam";
//     console.log("hello");
//     console.log(firstName);
// }

function myApp(){
    if(true){
        let firstName="shivam";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();