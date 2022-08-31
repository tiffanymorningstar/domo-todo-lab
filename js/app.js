
const input = document.getElementById("todo")
const btn = document.querySelector("#submit-button")
const uList = document.querySelector("#todo-list")

// const btn = document.querySelector('button')
// const input = document.querySelector('input')

btn.addEventListener('click', function(evt){
  const li = document.createElement('li')
  li.textContent = input.value 
  document.querySelector('ul').appendChild(li)
  input.value = ''

})
