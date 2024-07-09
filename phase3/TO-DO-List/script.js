const date = new Date();
document.getElementById("greet").innerHTML = "Now you being on : <span>   " + date.toDateString() + "<span>";


let submitbutton = document.getElementById('submit')

const inputBox = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");


let todolists = [];


submitbutton.addEventListener('click', () => {
  todolists.push(inputBox.value)
  addtodolist(inputBox.value)
  inputBox.value = ''

})



function addtodolist(todolist) {

  if (!todolist) {
    alert("Plese enter somethig")
  }

  let paragraph = document.createElement('p')
  paragraph.innerText = todolist
  listcontainer.appendChild(paragraph)

  paragraph.addEventListener('click', () => {

    paragraph.style.textDecoration = 'line-through'

  })

  paragraph.addEventListener('dblclick', () => {

    listcontainer.removeChild(paragraph)
    alert("Do your want to delete work?");
    remove(todolist)
  })


}


function remove(todo) {
  let index = todolists.indexOf(todo)

  if (index > -1)
    todolists.slice(index, 1)

}