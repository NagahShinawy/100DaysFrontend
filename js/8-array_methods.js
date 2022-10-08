// high order array methods
// forEach, map, filter
MINI_EXPERT_SALARY = 10
MINI_JOUNIOR_SALAY = 1
MINI_SENIOR_SALAY = 5

const tasks = [
    {
        id: 1,
        text: 'Learn JS',
        isDone: true,
        track: 'front',
    },
    {
        id: 2,
        text: 'Learn Vue',
        isDone: false,
        track: 'front',
    },
    {
        id: 3,
        text: 'HTML',
        isDone: true,
        track: 'front',
    },
    {
        id: 4,
        text: 'CSS',
        isDone: false,
        track: 'front',
    },
    {
        id: 5,
        text: 'django',
        isDone: false,
        track: 'back',
    }
]

tasks.forEach(function (task){
    console.log(task.text);
})
// get a new array from an array

let todos = tasks.map(function (task){
    return task.text
})

const SALARIES = [9, 6, 18, 5, 4, 10, 3, 1, 12, 15]
const BONUS = 2
let newSalaries = SALARIES.map(function (salary){
    return salary + BONUS
})
console.log(todos)
console.log(SALARIES)
console.log(newSalaries)


// filter: get new array based on condition

const jouniorsSalary = SALARIES.filter(function (salary){
    if (salary >= MINI_JOUNIOR_SALAY && salary < MINI_SENIOR_SALAY){
        return salary
    }
})



const senoirsSalary = SALARIES.filter(function (salary){
    if (salary >= MINI_SENIOR_SALAY && salary < MINI_EXPERT_SALARY){
        return salary
    }
})


const expertsSalary = SALARIES.filter(function (salary){
    if (salary > MINI_EXPERT_SALARY){
        return salary
    }
})

const doneTasks = tasks.filter(function (task){
    return task.isDone

})
const pendingTasks = tasks.filter(function (task){
    return !task.isDone

})

const frontend = tasks.filter(function (task){
    return task.track === 'front'
}).map(function (task){
    return task.text
})
console.log("Jrs", jouniorsSalary)
console.log("Srs", senoirsSalary)
console.log("Exp", expertsSalary)
console.log('='.repeat(100))
console.log(doneTasks)
console.log(pendingTasks)
console.log(frontend)
