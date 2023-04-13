//reduce method 

const numbers = [1,34,5,6,7,6,3];

// aim: sum of all the numbers in array

const sum =numbers.reduce((accumulator,currentValue)=>{
      return accumulator +currentValue;
})

// console.log(sum);
//accumulator , currentvalue

const userCart = [
    {productId : 1 ,productName:"mobile", price:12000},
    {productId : 2 ,productName:"laptop", price:32000},
    {productId : 3 ,productName:"tv", price:62000}
]

const totalAmount =userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price
},0)

console.log(totalAmount);