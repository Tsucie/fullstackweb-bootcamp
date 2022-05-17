const i = 10;
const urang = {
    name: "Rizky",
    age: 22,
    ktpNumber: 3671112233445566
};

delete urang.ktpNumber;
console.log(urang); // Output: { name: 'Rizky', age: 22 }

console.log(typeof urang); // Output: object

console.log(typeof i); // Output: number
