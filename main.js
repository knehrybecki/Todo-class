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

    return todo
  }

  addTodo() {
    if (inputText.val() === '') {
      alert('Please write any text')

      return
    }
   
    const newTodo = this.createNewTodo(inputText.val())

    newTodo.appendTo(todoList)
    this.createTodoControls(newTodo)
    this.id = newTodo.attr('data-id')

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

    this.deleteButton()
    this.acceptedButton()

  }
  deleteButton() {
    this.ref.click(event => {
      $(event.target)
        .closest('li')
        .remove()
    })
  }
  acceptedButton() {
    this.ref.click(event => {
      $(event.target)
        .closest('li')
        .addClass('checked')

      this.isDone = true
    })
  }
}

buttonAddTodo.click(() => {
  const todo = new Todo(inputText.val())
  todo.addTodo()
  console.log(todo)
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
