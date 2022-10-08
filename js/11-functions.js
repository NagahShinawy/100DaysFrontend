// arrow fun
// https://www.programiz.com/javascript/arrow-function#:~:text=Arrow%20function%20is%20one%20of,%7B%20return%20x%20*%20y%3B%20%7D

function addNumbers(num1, num2){
    return num1 + num2
}

// default values
function multiply(num1=1, num2=1){
    return num1 * num2
}

console.log(addNumbers(10, 8)) // 18
console.log(addNumbers()) // NaN
console.log(multiply()) // 1
console.log(multiply(5, )) // 5

// arrow function
// it allows you to create functions in a cleaner way compared to regular functions.
// For example, This function // function expression let x = function(x, y) { return x * y; }
const info = (name, age) => console.log(`Name is [${name}] with [${age}] years old`)
info('John', 30)

const print = () => console.log("Hello world"); // print is function obj
print()
let hi = function (){
    return 'Hi'
}

console.log(hi())

// quick function, anonymous function
let hello = function (name){
    return 'Hello ' + name
}
console.log(hello('Hayaat'))

let sayWelcome = () => console.log("Welcome World")
sayWelcome()

let sayWelcomeToUser = name => console.log("Welcome", name)
sayWelcomeToUser('James')

// sayWelcomeToUser: func name
// name: params
// console.log("Welcome", name): func body
let getUserInfo = (name, age) => {
    return `User: ${name}\nAge: ${age}`
}

let _info = getUserInfo('John', 21);

console.log(_info)

// Example 3: Arrow Function as an Expression
let age = 20;
let checkAdult = (age >= 18) ? () => console.log("Adult"): () => console.log("Baby")

checkAdult()

// let fullSalary = (basic, bonus) => return basic + bonus
let fullSalary = (basic, bonus) => {return basic + bonus}

console.log(fullSalary(5000, 500))

const tasks = [
    {
        id: 1,
        text: 'Learn JS',
        isDone: false
    },
    {
        id: 2,
        text: 'Learn Vue',
        isDone: false,
    },
    {
        id: 3,
        text: 'HTML',
        isDone: true,
    }
]
tasks.forEach((task) => console.log(task.text))

