// every method 

// const number =[ 2,4,5,6,7];



// const ans = number.every((number)=>number%2===0);

// //call back function --->true /fase (boolean)
// //evry method --->true /fase (boolean)

// console.log(ans)


const userCart = [
    {productId : 1 ,productName:"mobile", price:12000},
    {productId : 2 ,productName:"laptop", price:32000},
    {productId : 3 ,productName:"tv", price:62000}
]

const ans =userCart.every((cartItem)=>cartItem.price<30000);

console.log(ans);
