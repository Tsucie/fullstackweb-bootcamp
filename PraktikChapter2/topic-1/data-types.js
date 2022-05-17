/* Start String data Types */
const asma = "Rizky Adji Pangestu"; // String
let address = 'Tangerang ("Banten")'; // String

console.log(asma);
console.log(address);
console.log("Breeze");

/* End data Types */

/* Start Number Data Types */
const x = 10;
const y = 100;
let z = 1.1; // float

console.log(x + y + z); // Output: 121.1
/* End data Types */

/* Start Boolean */
const isRaining = false;
const isExthausted = true;
let shouldRunFromReality = true;
/* End Boolean */

/* Start Null */

/* End Null */

/* Start Undefined */
let tujuanHidupku;
let artiKebahagiaan = undefined;

console.log(tujuanHidupku);
console.log(artiKebahagiaan);
/* End Undefined */

/* Start Array */
const catNames = ["Oyen", "Bob"];

// Call Oyen
console.log(catNames[0]);

// Call Bob
console.log(catNames[1]);
/* End Array */

// Start Object
const person = {
  name: "Rizky",
  age: 22,
  isMarried: false,
  pets: [
    {
      name: "Bogey",
      species: "Cat",
    },
    {
      name: "Lexa",
      species: "Dog",
    },
  ],
};

console.log(person.name);
console.log(person["age"]);
console.log(person.pets[0]["name"]);
// End Object
