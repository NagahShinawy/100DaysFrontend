const ESTABLISHED = "Connection Establish"
const FAILED = "Connection Failed"
const NumsOfEmployees = 7
const NUM_OF_ACCEPTED = 3

let employees = ["John", "James", "Max", "Adam", "Erick", "Nick", "Sara"]
let accepted = []

const prms = new Promise((resolved, rejected) => {
    if (employees.length === NumsOfEmployees ){
        resolved(employees)
    } else {
        rejected(Error(`$num of employees is [${employees.length}] not [${NumsOfEmployees}]`))
    }

}).then(
    (employees) => {
        for (const index in employees) {
            console.log(`${parseInt(index) + 1} - ${employees[index]}`)
        }

        const emp = employees[Math.floor(Math.random() * employees.length)]
        console.log(accepted)
    },

)

