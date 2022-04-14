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
  constructor(isDone, text, id) {
    this.isDone = isDone
    this.text = text
    this.id = id
  }

  createNewTodo(text) {
    const todos = $('<li>', {
      class: 'todo__item',
      text,
      'data-id': uuidv4()
    })

    return todos
  }

  addTodo() {
    if (inputText.val() === '') {
      alert('Please write any text')

      return
    }

    const newTodo = this.createNewTodo(inputText.val())

    newTodo.appendTo(todoList)
    this.createTodoControls(newTodo)

    inputText.val(null)
  }

  createTodoControls(todoItem) {
    const allButton = $('<div>', { class: 'todo__item-all-button' })
      .appendTo(todoItem)
    const acceptedButton = $('<button>', { class: 'todo__item-accepted' })
      .appendTo(allButton)
    const deleteButton = $('<button>', { class: 'todo__item-deleted' })
      .appendTo(allButton)

    $('<i>', { class: 'fa-solid fa-check' })
      .appendTo(acceptedButton)
    $('<i>', { class: 'fa-solid fa-trash' })
      .appendTo(deleteButton)

    deleteButton.click(event => {
      $(event.target)
        .closest('li')
        .remove()
    })
    acceptedButton.click(event => {
      $(event.target)
        .closest('li')
        .addClass('checked')

      this.isDone = true
    })
  }
}

buttonAddTodo.click(() => {
  const todo = new Todo(false, inputText.val(), uuidv4())
  todo.addTodo()
})

const filters = () => {
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

filters()
