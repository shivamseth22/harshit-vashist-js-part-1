//function inside function 

const app =() =>{
    const myFunc = () =>{
        console.log("hello my func");
    }
    const sum = (a , b ) =>{
        return a+b ;
    }

    const mul = (c , d ) => {
        return c*d;
    }
    console.log("inside app");
    myFunc();
    console.log(sum(4,5));
}

app();

