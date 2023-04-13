//methods

//methods are function inside object

const person = {
    firstName: "Ram",
    age: 20,
    about :function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
    }
}

person.about();

//is function me this wo object hai jo is function ko call kr rha hai 