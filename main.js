import './style/style.sass'
import './style/reset.css'
import $ from 'jquery'
import { v4 as uuidv4 } from 'uuid'

const inputText = $('.input-text')
const buttonAddTodo = $('.add-item')
const todoList = $('.todo__list')
const filtrAll = $('.filtr-all')
const filtrTodo = $('.filtr-todo')
const filtrDone = $('.filtr-done')

class Todo {
  constructor(text) {
    this.isDone = false
    this.text = text
  }

  createNewTodo(text) {
    const todo = $('<li>', {
      class: 'todo__item',
      text,
      'data-id': uuidv4()
    })

    this.ref = todo
    this.id = todo.attr('data-id')

    if (text === '') {
      alert('Please write any text')

      return
    }

    todo.appendTo(todoList)
    
    this.createControlTodo(todo)
  }

  createControlTodo(todo) {
    const allButton = $('<div>', { class: 'todo__item-all-button' })
      .appendTo(todo)
    const acceptedButton = $('<button>', { class: 'todo__item-accepted' })
      .appendTo(allButton)
    const deleteButton = $('<button>', { class: 'todo__item-deleted' })
      .appendTo(allButton)

    $('<i>', { class: 'fa-solid fa-check' })
      .appendTo(acceptedButton)
    $('<i>', { class: 'fa-solid fa-trash' })
      .appendTo(deleteButton)

    this.ref = deleteButton
    this.ref = acceptedButton

    this.deleteTodo(deleteButton)
    this.acceptedTodo(acceptedButton)
  }

  deleteTodo(deleteButton) {
    deleteButton.click(event => {
      $(event.target)
        .closest('li')
        .remove()
    })
  }
  acceptedTodo(acceptedButton) {
    acceptedButton.click(event => {
      $(event.target)
        .closest('li')
        .addClass('checked')

      this.isDone = true
    })
  }
}

buttonAddTodo.click(() => {
  const todo = new Todo(inputText.val())
  todo.createNewTodo(inputText.val())

  inputText.val(null)
})

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
