const isMale = false
const MALE = 'Male'
const FEMALE = 'Female'

// ternary statement
const GENDER = isMale ? MALE: FEMALE

console.log(GENDER)
let color = 'black'

switch (color){
    case 'red':
        console.log("Danger")
        break

    case 'yellow':
        console.log("Warning")
        break
    case 'blue':
        console.log('Normal')
        break

    default:
        console.log("unknown")
}

const CASES = {
    danger: 'Red',
    warning: 'yellow',
    normal: 'Normal',

}

console.log(CASES)
console.log(CASES.warning)
console.log(CASES.danger)
console.log(CASES.normal)