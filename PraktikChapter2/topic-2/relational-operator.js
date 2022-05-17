const stockFruits = ["Mango", "Orange", "Apple"];
const orang = {
  name: "Rizky",
  age: 22,
  ktpNumber: 3671112233445566,
};

// Check array by index
const isMyFavouriteFruitInStock = 2 in stockFruits;
console.log(isMyFavouriteFruitInStock); // Output: true

// Check object by property name
const doesOrangHaveKtp = "ktpNumber" in orang;
console.log(orang.name, doesOrangHaveKtp ? "have KTP" : "doesn't have KTP"); // Output: Rizky has KTP

console.log(orang instanceof Date); // Output: false

const date = new Date(); // Today
console.log(date instanceof Date); // Output: true
