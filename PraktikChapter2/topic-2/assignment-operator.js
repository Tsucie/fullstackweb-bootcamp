// Declare x variable
let x = 10;

// Additional assignment operator
x += 5; // x = x + 5 ==> x = 10 + 5 = 15

console.log("x:", x);

// Object
let person = { name: "Rizky", age: 22, job: "Programmer" };

// Array
let fruits = ["Mango", "Apple", "Banana"];

// Assignment to object
person.name = "Rizky Adji";
console.log("person:", person); // person = { name: 'Rizky Adji', age: 22 }

// Assignment to array
fruits[0] = "Orange";
console.log("fruits:", fruits); // fruits = ['Orange','Apple','Banana']

// Destructuring object
let { name, job } = person;
let [firstFruit, secondFruit] = fruits;

console.log("name:", name); // name: 'Rizky Adji'
console.log("job:", job); // job: 'Programmer'
console.log("firstFruit:", firstFruit); // firstFruit: 'Orange'
console.log("secondFruit:", secondFruit); // secondFruit: 'Apple'
