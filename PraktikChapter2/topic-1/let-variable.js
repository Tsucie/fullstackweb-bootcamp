/* Make Direct Variable */
let pesan = "Hello world!";
console.log(pesan);

/* Make Many Variables */
let jeneng = "Rizky",
  umur = 22,
  jenisKelamin = "laki-laki";

console.log({
  jeneng,
  umur,
  jenisKelamin,
});

/* Start Scope */
let discount = 500; // Global scope
if (true) {
  let discount = 300; // Local scope
  console.log(discount + " Local scope"); // Output 300
}
console.log(discount + " Global Scope"); // Output 500
/* End Scope */

/* Start Reassigned and Redeclared */
let nami; // Declaration
console.log(nami); // undefined

nami = "Rizky"; // Assigned
console.log(nami); // Output: Rizky
nami = "Adji"; // Reassigned
console.log(nami); // Output: Adji
// let nami = "Pangestu"; // Error because let can't be redeclared
// console.log(nami);
/* End Reassigned and Redeclared */

/* Start hoisting */
let message = "Hello";
function greetings() {
  let message = "Hello World";
  console.log(message);
}
greetings();
/* End hoisting */
