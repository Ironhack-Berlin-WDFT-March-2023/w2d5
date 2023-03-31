// querySelectorAll: NodeList => Can be treated like an array
// getElementsByClassName/TagName/Name: HTMLCollection => Cannot be treated like an array

const fruitList = ["apple", "banana", "tomato"]

// (1) Add all fruits as list items to the unordered list
const fruits = document.querySelector(".fruits")

// fruitList.forEach(function(fruit) {
//   fruits.innerHTML += `<li>${fruit}</li>`
// })

fruitList.forEach(fruit => {
  const li = document.createElement("li")
  li.textContent = fruit
  fruits.appendChild(li)
})

// (2) Add the image as an image element to the div
const imgSrc = "https://images.unsplash.com/photo-1680169258027-3677d4c8e4f5"

const div = document.querySelector("div")
const img = document.createElement("img")
img.setAttribute("src", imgSrc)
div.appendChild(img)

// (3) Change the first and the last list item element in every list to "first" and "last"

const uls = document.querySelectorAll(".first-last")
document.querySelectorAll(".first-last").forEach(ul => {
  console.log(ul.childNodes)
  ul.childNodes[1].innerText = "first"
  ul.childNodes[5].innerText = "last"
})

// document.querySelectorAll(".first-last li:nth-child(1)").forEach(li => {
//   li.innerText = "first"
// })

// document.querySelectorAll(".first-last li:nth-child(3)").forEach(li => {
//   li.innerText = "last"
// })
