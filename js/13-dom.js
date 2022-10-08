
console.log(window)
// window.alert('This is msg')
// alert('This is msg')

// Single element selector
const loginForm = document.getElementById('my-form')
console.log(loginForm) // get form element
const containers = document.querySelector('.container')
console.log(containers)

// multiple selector
const headers = document.querySelectorAll('h1')
console.log(headers)
const items = document.querySelectorAll('.item')
console.log(items) // NodeList(3)[li.item, li.item, li.item]
const lis = document.getElementsByClassName('item')
console.log(lis)

for (const li of lis) {
    console.log(li.innerHTML)
}

console.log("#".repeat(50))
const h1s = document.getElementsByTagName('h1')
for (const h1 of h1s) {
    console.log(h1.innerText)

}

console.log("#".repeat(50))


items.forEach(function (item){
    console.log(item.innerHTML)
})

console.log("#".repeat(50))

headers.forEach((header) => console.log(header.innerHTML))
const ul = document.querySelector('.items')
console.log(ul)

// ul.remove() // remove element from dom
// ul.lastElementChild.remove()
// ul.firstElementChild.remove()

// update content
ul.firstElementChild.textContent = 'Vue is js framework'
ul.children[1].innerHTML = 'Hello World'
ul.lastElementChild.innerHTML = '<h1>React From FB</h1>'
const submitBtn = document.querySelector('.btn')
submitBtn.style.background = 'red';
submitBtn.addEventListener('mouseover', (event) =>{
    event.preventDefault() // stop flash
    console.log('Clicking')
    console.log(event.target) // get the element
    console.log(event.target.getAttribute('value')) // get attribute value
    console.log(event.target.className) // get class name
    document.querySelector('#my-form').style.background = 'green';
    document.querySelector('body').classList.add('bg-dark')
    // document.querySelector('#name').setAttribute('value', 'John')
    // document.querySelector('#email').setAttribute('value', 'ex: john@test.com')
})

const form = document.querySelector('#my-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('.msg')
const users = document.querySelector('#users')

loginForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault()
    console.log('testing')
    if (name.value === '' || email.value === ''){
        // alert('Please fill name and email')
        msg.innerHTML = 'Please enter fields'
        msg.classList.add('error')
        setTimeout(() => {
            msg.remove() // remove msg after 3 seconds
        }, 3000)
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${name.value}: ${email.value}`))
        users.appendChild(li)

        // clear fields
        name.value = ""
        email.value = ""
    }
}