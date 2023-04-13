function myFunc(){
    function hello(){
        // console.log("hello world0");
        return "hello world"
    }
    return hello ;
}

const ans = myFunc();
console.log(ans());

// ans();