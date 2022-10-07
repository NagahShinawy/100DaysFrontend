// primitive data types :
// In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
// There are 7 primitive data types: string, number, boolean, bigint, undefined,symbol,null

// =====================================================================================================================

// Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.
// Undefined: It means the value does not exist in the compiler.

// Null       used for intentionally missing values. بقصد
// Undefined  used for unintentionally missing values. بدون قصد


// =====================================================================================================================


const WELCOME_MESSAGE = "Hi "; // string
let age = 30; // number
let rating = 4.5; // number
let isUnderAge = false; // boolean
let isAuth = true; // boolean
let user = null; // empty value. nothing in it.
let profile = undefined;
let name; // undefined

function welcomeUser(username = "User"){
    return WELCOME_MESSAGE + username;
}

console.log(welcomeUser("John"));
console.log(typeof rating);
console.log("Name is ", name, "With type", typeof name);
console.log(typeof user) // object. why ?
