let nickname = "John";
let age = 30
const SKILLS_SEPARATOR = ', '
// ===============================================================================================================

// Backticks helps to include variables in a string (interpolation)

function getUserInfo(name, age){
    return `Name is [${name}] and have age [${age}]`; // template string
}
console.log(getUserInfo(nickname, age))

// ===============================================================================================================

const HELLO = "Hello World from js";

// string property and methods
// length
console.log(`Number of chars are [${HELLO.length}]`);

// to upper
console.log(HELLO.toUpperCase())

// to lower
console.log(HELLO.toLowerCase())

// substring
console.log(HELLO.substring(0, 5)) // substring
console.log(HELLO.substring(0, 5).toLowerCase())
console.log(HELLO.substring(0, 5).toUpperCase())

const DIRECTORS = 'john@edu.eg;james@edu.eg;adam@edu.eg;sara@edu.eg;jackn@edu.eg'
let skills = "HTML, CSS, JS, Vue, React"

// split
console.log(HELLO.split('o'));
console.log(DIRECTORS.split(';'));
console.log(HELLO.split('')) // (19) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', ' ', 'f', 'r', 'o', 'm', ' ', 'j', 's']
console.log(HELLO.split())  // ['Hello World from js']
function skillsToList(skills){
    return skills.split(SKILLS_SEPARATOR);
}

console.log(skillsToList(skills));


