

// const numbers = [ 3,5,11,1]

// //kya ek bhi number esa hai jo even hai 

// //true 

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);


const userCart = [
    {productId : 1 ,productName:"mobile", price:12000},
    {productId : 2 ,productName:"laptop", price:32000},
    {productId : 3 ,productName:"tv", price:62000}
]

const ans =userCart.some((cartItem)=>cartItem.price>1000000);

console.log(ans)