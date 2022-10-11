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
        rejected(Error(`num of employees is [${employees.length}] not [${NumsOfEmployees}]`))
    }

}).then(
    (employees) => {
        while (accepted.length < NUM_OF_ACCEPTED){
            const emp = employees[Math.floor(Math.random() * employees.length)]
            if(!accepted.includes(emp)){
                accepted.push(emp)
            }
        }

        console.log(accepted)
        return accepted
    },

).then(
    (accepted) => {
        for (const emp of accepted) {
            console.log(emp)
        }
    },

).catch((reason => {
    console.log("Bad, ", reason)
})).finally(() => console.log("Finally Done"))

