const cart = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 50 },
];

let lowestProduct = cart[0];

for (const prod of cart) {
  if (prod.price > lowestProduct.price) {
    lowestProduct = prod;
  }
}

console.log(lowestProduct);
