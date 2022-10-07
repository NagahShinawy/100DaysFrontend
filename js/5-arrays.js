// variable stores multiple values

let RemoteWorkingDays = ['Sun', 'Mon', 'Tue']
const favFruits = ['Orange', 'Apple', 'Banana', 'Mango']
const items = ["John", 30, true, 4.6, null] // can store diff data types

console.log(`Remote Days are ${RemoteWorkingDays}`) // Remote Days are Sun,Mon,Tue

console.log(favFruits)
console.log(favFruits[0])
console.log(favFruits[1])
console.log(favFruits[2])
console.log(favFruits[5]) // undefined.  out of range. not error but gives undefined

favFruits[7] = "pears";
console.log(favFruits);
for (const itemsKey in favFruits) {
    console.log(favFruits[itemsKey])
}


function append(value, items){

    items[items.length] = value
    return items
}
let incrementIndex = favFruits.length;
favFruits[incrementIndex] = 'Green Apple'
console.log(favFruits)

let players = ["Messi", "Ronaldo", 'Salah', 'Haland']

console.log(append('Trika', players));
players.push('Zidane')
console.log(players)

 // add to the first
players.unshift('Ronaldinho');
console.log(players)

// remove and return last player
let lastPlayer = players.pop()
console.log(lastPlayer)
console.log(players)

// check array
console.log(Array.isArray(players)) // true
console.log(Array.isArray('test')) // false
if (Array.isArray(players)){
    console.log(`You have array [${players}] with length [${players.length}]`)
}

// indexOf: get index of certain value
console.log(players.indexOf('Messi')) // 1
console.log(players.indexOf('MessI')) // -1
console.log(players.indexOf('testing')) // -1. means value 'testing' not exist at the array