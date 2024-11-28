// Task 1
const firstP = document.querySelectorAll('p')
firstP[0].classList.add('text-blue-500')

// Task 2
 const allMyClass = document.querySelectorAll('.myClass')
 allMyClass.forEach(item => {
    item.classList.add('border')
 })

//  Task 3

const paragraph = document.createElement("p")
const body = document.querySelector("body")
paragraph.innerText = "This is a new a paragraph"
body.appendChild(paragraph)

// Task 4

const container = document.querySelector('.container');

if (container.lastElementChild) {
  container.lastElementChild.remove();
}

// Task 5 - Select the last li element in the
//  `myList` and change its text to "grapefruit".
       
const myList = document.querySelectorAll('.myList > li');
myList[(myList.length - 1)].innerText = "Grapefruit"

/* Task 6 - Select all
 elements with the class `myClass` and remove the first one.*/

const allMyClasses = document.querySelectorAll('.myClass')
console.log(allMyClasses)
allMyClasses[0].remove()

