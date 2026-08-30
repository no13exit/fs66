// fabric function

function createProduct(name, description, price) {
    return {
        name: name,
        description: description,
        price: price,
    }
}



const product1 = createProduct("product1", "description1", 100);
console.log(product1);
const product2 = createProduct("product2", "description2", 200);
console.log(product2);


const protoProd = Object.getPrototypeOf(product2); 
console.log(protoProd);
console.log(protoProd)