import $ from 'jquery'
import './style/style.sass'
import './style/reset.css'
import { Todo } from './Todo.js'

const inputText = $('.input-text')
const buttonAddTodo = $('.add-item')
const todoList = $('.todo__list')
const filtrAll = $('.filtr-all')
const filtrTodo = $('.filtr-todo')
const filtrDone = $('.filtr-done')

buttonAddTodo.click(() => {
  const todo = new Todo(inputText.val())

  const createTodo = todo.createNewTodo(inputText.val())
    .appendTo(todoList)

  const allButton = todo.createAllButton()
    .appendTo(createTodo)

  const acceptedButton = todo.createAcceptedBuuton()
    .appendTo(allButton)

  const deleteButton = todo.createDeleteButton()
    .appendTo(allButton)

  acceptedTodo(acceptedButton, todo)
  deleteTodo(deleteButton)

  inputText.val(null)
})

const acceptedTodo = (acceptedButton, todo) => {

  $('<i>', { class: 'fa-solid fa-check' })
    .appendTo(acceptedButton)

  acceptedButton.click(event => {
    $(event.target)
      .closest('li')
      .addClass('checked')

    todo.isDone = true
  })
}

const deleteTodo = deleteButton => {
  $('<i>', { class: 'fa-solid fa-trash' })
    .appendTo(deleteButton)

  deleteButton.click(event => {
    $(event.target)
      .closest('li')
      .remove()
  })
}

const filtersTodo = () => {
  filtrAll.click(() => {
    $('.todo__item').show(500)
  })
  filtrTodo.click(() => {
    $('.todo__item').show(500)
    $('.todo__item.checked').hide(400)
  })
  filtrDone.click(() => {
    $('.todo__item').hide(400)
    $('.todo__item.checked').show(500)
  })
}

filtersTodo()
