//lexical scope
function myApp() {
    const myVar = "vaue1";
    function myfunc() {
        const myVar = "value59"
        console.log("inside from myFunc",myVar);
    }
    const myFunc2 = function(){}
    const myFunc3 =() => {}
    console.log(myVar);
    myfunc();
}
myApp();