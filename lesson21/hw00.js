const product1 = {
  name: "notebook lenovo thinkpad",
  description: "cpu intel core7, ram:16gb",
  price: 1283,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
  },
};

const product2 = {
  name: "smartphone samsung galaxy",
  description: "screen 6.5, rom:128gb",
  price: 850,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
  },
};

const product3 = {
  name: "tablet apple ipad air",
  description: "display 10.9, chip m1, 64gb",
  price: 599,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
  },
};

const product4 = {
  name: "monitor lg ultrawide",
  description: "34 inch, ips, 144hz",
  price: 450,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
  },
};

const product5 = {
  name: "headphones sony wh-1000xm4",
  description: "wireless, noise canceling",
  price: 349,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
  },
};

console.log(product1.info());
console.log("==================================");
function Product(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;

  this.info = function () {
    return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
  };
}

const product6 = new Product(
  "notebook lenovo thinkpad",
  "cpu intel core5, ram:8gb",
  1003,
);
const product7 = new Product(
  "smartphone samsung galaxy",
  "screen 6.5, rom:128gb",
  850,
);
const product8 = new Product(
  "tablet apple ipad air",
  "display 10.9, chip m1, 64gb",
  599,
);

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
];

// products.forEach((element) => {
//   console.log(element.info());
// });


products.forEach((element) => {  
   console.log("==================================");
  for (const key in element) {
      if (typeof element[key] === 'function') {
        console.log(`aggregated: ${element[key]()}`);
      } else {
        console.log(`${key}: ${element[key]}`);
      }
  };
});