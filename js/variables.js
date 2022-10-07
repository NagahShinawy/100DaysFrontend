// ============================== Variables ==================================

// 1- let: Allow to reassign the value

let age = 30; // declare & init
console.log(`Your age is ${age}`)
age = 50
console.log(`Your age now is ${age}`)

let username; // declare
username = "John"; // then init
console.log(`Welcome ${username}`)
// 2- const : readonly value. it can not change when you reassign it gives,
// Uncaught TypeError: Assignment to constant variable.

const salary = 3000; // can not be change. can not reassign
console.log(`Your Salary is ${salary}`);

// const salary = 4000; // Uncaught SyntaxError: Identifier 'salary' has already been declared

console.log(`Your Salary is ${salary}`); // Uncaught TypeError: Assignment to constant variable.

// const score; // Uncaught SyntaxError: Missing initializer in const declaration
// console.log(score)

const WEEKEND = ['Fri', 'Sat']
const ADULT = 18;

// GOOGLE will equal Google and MICROSOFT will equal Microsoft.
//  Destructuring assignment
const [GOOGLE, MICROSOFT ]= ['Google', 'Microsoft']
let THEMES = ["Red", "Green", "Blue", "White", "Yellow"]
const [RED, GREEN, COLORS, a, b, c, d, e, f, g, h, i] = THEMES
console.log(`R: ${RED}\nG: ${GREEN}\nColors: ${COLORS}\nI: ${i}`); // i is undefined