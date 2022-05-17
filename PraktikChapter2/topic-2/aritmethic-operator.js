const c = 5;
const d = 10;
const e = "100";
let f = 6;

// Add
console.log("c + d =", c + d); // 15

// Add and multiply
console.log("(c + d) * e =", (c + d) * e); // 1500
console.log("e + c + d =", e + c + d); // "100510"

// Reminder
console.log(d % c); // 0

// Increment
f++; // f += 1, f = f + 1 => f = 7
console.log("f", f);

// Decrement
f--; // f -= 1, f = f - 1 => f = 5
console.log("f", f);

// Unary negation
console.log("Unary negation:", -c); // -5

// Unary plus
console.log("Unary plus:", +c); // -5

// Exponentiation
console.log("Exponentiation:", c ** 2); // c ^ 2 = 25

// Division
console.log("Division:", d / c); // 2
