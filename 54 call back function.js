
function myFunc2(){
    console.log("inside my func2")
}

function myFunc(a){
    a();
    // console.log(a);
    console.log("hello world");    
}

myFunc(myFunc2);