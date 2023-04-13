//splice method

//start , delete , insert

const myArray= ["item1", "item2","item3","item4"];

//delete
const ans =myArray.splice(1,1);
console.log(ans);//deleted item

//insert 

myArray.splice(1,0,"inserted item")
console.log(myArray);