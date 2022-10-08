const MAX_SPEED = 120

let speed = 300
const FULLMARK = 10
let math = 10
if (speed > MAX_SPEED){
    console.log("Danger")
}
else {
    console.log("Normal, safe")
}

if (math === FULLMARK){ // match value and type
    console.log('Congs, you got fullmark')

}
const expertSalary = 10
const jrSalary = 3
const srSalary = 5
let salary = 5
if (salary === expertSalary){
    console.log("Expert developer")
}
else if(salary === srSalary){
    console.log("Senior developer")
}
else if (salary === jrSalary){
    console.log("Jn developer ")
}
else {
    console.log("unknown salary")
}
const SALARIES = {
    jnr: 3,
    snr: 5,
    exp: 10
}
const BONUS = 1

let withBonus = {

}


let sar;
for (const developer in SALARIES) {
    sar = SALARIES[developer]
    withBonus[developer] = sar + BONUS

}
console.log(withBonus)
const ADMIN = 'admin'
const DIRECTOR = 'director'
const staff = 'staff'

let user = 'test'

if (user === ADMIN || user === DIRECTOR){
    console.log("You have full permissions")
}
else if (user === 'staff') {
    console.log("Not Allowed")
}
else {
    console.log("unknown user")
}

