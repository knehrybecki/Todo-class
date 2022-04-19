import $ from 'jquery'
import './style/style.sass'
import './style/reset.css'
import { Todo } from './Todo.js'

const inputText = $('.input-text')
const buttonAddTodo = $('.add-item')
const todoList = $('.todo__list')
const filterAll = $('.filter-all')
const filterTodo = $('.filter-todo')
const filterDone = $('.filter-done')

let todoArray = []

buttonAddTodo.click(() => {
  if (inputText.val() === '') {
    alert('Please write any text')

    return
  }

  const todo = new Todo(inputText.val())

  todo.createNewTodo().appendTo(todoList)
  
  todoArray = todoArray.concat(todo)
  
  const acceptedButton = todo.getAcceptButton()
  const deleteButton = todo.getDeleteButton()

  acceptedTodo(acceptedButton, todo)
  deleteTodo(deleteButton, todo)

  inputText.val(null)
})

const acceptedTodo = (acceptedButton, todo) => {
  acceptedButton.click(event => {
    if (todo.isDone) {  
      $(event.target)
        .closest('li')
        .removeClass('checked')

      todo.unCheck.remove()

      return todo.markDoneTodo().appendTo(todo.acceptedButton)
    }

    const index = todoArray.findIndex(item => item.id === todo.id)

    todoArray[index].isDone = todo.isDone

    $(event.target)
      .closest('li')
      .addClass('checked')

    todo.check.remove()

    todo.markDoneTodo().appendTo(todo.acceptedButton)
  })
}

const deleteTodo = (deleteButton, todo) => {
  deleteButton.click(event => {
    $(event.target)
      .closest('li')
      .remove()

    const index = todoArray.findIndex(item => item.id === todo.id)

    delete todoArray[index]

    todoArray = todoArray.filter(item => item !== 'undefined')
  })
}

const filtersTodo = () => {
  filterAll.click(() => {
    $('.todo__item').show(500)
  })
  filterTodo.click(() => {
    $('.todo__item').show(500)
    $('.todo__item.checked').hide(400)
  })
  filterDone.click(() => {
    $('.todo__item').hide(400)
    $('.todo__item.checked').show(500)
  })
}

filtersTodo()
