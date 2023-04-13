//map

// map is an iterable

//store data in ordered fashion

//store key value pair (like object)

//dubicate keys are not allowed like objects

//different bt=etween maps and objects 

//object can only have string or symbo as key
 
//in maps you can use anything as key like array , number , satring 


const person = {
    firstName :"shivam",
    age : 10
}

// console.log(person.firstName);
// console.log(person["firstName"]);

for(let key in person){
    console.log(typeof key)
}


//map will store key value pair

const people = new Map();

people.set('firstName','Shivam');
people.set('age',7);
people.set(1,'one');
console.log(person);
console.log(people.get('firstName'));

for(let key of people.keys()){
    console.log(key ,typeof key);
}

for([key ,value] of people){
    console.log(key,value)
}

const newPerson1 = {
    id: 1 , 
    firstName:"shivam"
}
const userInfo = new Map();
userInfo.set(newPerson1 , {age : 22 , gender:"male"});

console.log(userInfo);

console.log(newPerson1.id);
console.log(userInfo.get(newPerson1).age)
// const newPeople = new Map([['firstName', "shivam"] , ['age', 20]]);
// console.log(newPeople);