const a = 10;
const b = 100;

const isABiggerThanB = a > b;
console.log("isABiggerThanB:", isABiggerThanB); // false

// Equal
const isAEqualToB = a == b;
console.log("isAEqualToB:", isAEqualToB); // false

// Not Equal
const isANotEqualToB = a != b;
console.log("isANotEqualToB:", isANotEqualToB); // true

/* Strict Equal
 * It will be false if the variable aren't same type
 */
const isAStrictEqualToB = a === b;
console.log("isAStrictEqualToB:", isAStrictEqualToB); // false

// Strict not equal
