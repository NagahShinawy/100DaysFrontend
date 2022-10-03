alert("I love You ❤❤❤❤❤❤")

// ============================== console obj ================================

console.log("I love You ❤❤❤❤❤❤", 1, 4, 3)
// console.clear()
console.error("This is error using console.error()")
console.warn("This is warning using console.warn()")

// ============================== Variables ==================================

// 1- let: Allow to reassign the value

let age = 30;
console.log(`Your age is ${age}`)
age = 50
console.log(`Your age now is ${age}`)

// 2- const : readonly value. it can not change when you reassign it gives,
// Uncaught TypeError: Assignment to constant variable.

const salary = 3000;
console.log(`Your Salary is ${salary}`);

salary = 4000;
console.log(`Your Salary is ${salary}`); // Uncaught TypeError: Assignment to constant variable.

const score; // Uncaught SyntaxError: Missing initializer in const declaration
console.log(score)

