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
  if (inputText.val() === '') {
    alert('Please write any text')

    return
  }

  const todo = new Todo(inputText.val())

  const createTodo = todo.createNewTodo(inputText.val())
    .appendTo(todoList)

  const acceptedButton = createTodo.find($('.todo__item-accepted'))
  const deleteButton = createTodo.find($('.todo__item-deleted'))

  acceptedTodo(acceptedButton, todo)
  deleteTodo(deleteButton)

  inputText.val(null)
})

const acceptedTodo = (acceptedButton, todo) => {
  acceptedButton.click(event => {
    $(event.target)
      .closest('li')
      .addClass('checked')

    todo.isDone = true
  })
}

const deleteTodo = deleteButton => {
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
