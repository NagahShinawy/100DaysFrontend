for (let i = 0; i < 9 ; i++) {
    console.log(`${i + 1} Hello World`, i)
}

let days = ['sat', 'sun', 'tues', 'wen']


// using index. day here is the index
for (const day in days) {
    console.log(day, days[day], typeof day)// number, value, string
}

// using value. day here is each value
for (const day of days) {
    console.log(day)
}

function toCapitalizeCase(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
}

for (let i = 0; i < days.length; i++) {
    console.log(`${i + 1} - ${toCapitalizeCase(days[i])}`)
}
let i = 0
while (i < days.length) {
    console.log(i + 1, days[i], toCapitalizeCase(days[i]))
    i++
}

console.log('='.repeat(50))

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

for (const task of tasks) {
    const {id, text} = task // destructuring
    console.log(`${id} - ${text}`) // template string
}