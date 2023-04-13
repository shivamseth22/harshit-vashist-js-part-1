
//sorted value at basis of ascii value
const userNames=["shivam","ram","shyam"];
userNames.sort(); 
console.log(userNames);


const numbers =[5,9,1200,400,3000]
numbers.sort((a,b)=>{
    return a-b;
});
console.log(numbers);

//1200,410
//a-b --->
//a-b---> positive (greater than 0)--->b,a 
//410 , 1200

// price low to high or high to low 

const products =[
    {productId:1 , productName :"p1" , price:3500},
    {productId:2 , productName :"p2" , price:400},
    {productId:3 , productName :"p3" , price:500},
    {productId:4 , productName :"p4" , price:600}
]

products.sort((a,b)=>{
    return a.price-b.price;

});

console.log(products)