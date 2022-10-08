const WELCOME = 'Welcome';

const profile = {
    username: 'john',
    fname: 'John',
    lname: "James",
    dob: '01-01-1990',
    gender: 'male',
    isMarried: true,
    skills: ["HTML", 'CSS', 'JS', 'Vue', 'React', 'Angular', 'Vanilla'],
    address:{
        street: '5 orabi st',
        city: 'Giza',
        country: 'Egypt',
    },

}

console.log(profile);
function getFullName(fname, lname){
    return `${fname} ${lname}`
}

function welcomeUser(fname, lname){
    return `${WELCOME} ${fname} ${lname}`
}

function fullAddress(){
    return `${profile.address.street}, ${profile.address.city}, ${profile.address.country}`;
}
console.log(welcomeUser(profile.fname, profile.lname));

console.log(`${getFullName(profile.fname, profile.lname)} has [${profile.skills.length}] skill(s)`)

console.log(fullAddress());
console.log(profile.dateofbirth) // undefined

// destructuring
// Now destructuring is just like that approach you took when looking for your shoes.
// Destructuring is the act of unpacking elements in an array or object.
const {username, fname, lname, gender} = profile
const {dob, address: {city}} = profile
const {skills} = profile
console.log(username, fname, lname, gender)
console.log(dob, city)
const [html, css] = skills
console.log(html, css)
console.log(profile.email) // undefined
profile.email = 'john@test.edu.eg'
console.log(profile.email);

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
const {js, vue} = tasks
console.log(js, vue) // undefined
const [javascript, vuejs] = tasks
console.log(javascript, vuejs)

function toJson(data){
    return JSON.stringify(data)
}

console.log(typeof toJson(tasks)); // string
console.log(toJson(tasks));