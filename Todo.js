import { acceptedTodo, deleteTodo } from './main'
import { v4 as uuidv4 } from 'uuid'
import $ from 'jquery'

const todoList = $('.todo__list')

export class Todo {
  constructor(text) {
    this.isDone = false
    this.text = text
  }

  createNewTodo(text) {
    const todo = $('<li>', {
      class: 'todo__item',
      text,
      'data-id': uuidv4()
    }).appendTo(todoList)

    this.id = todo.attr('data-id')

    if (text === '') {
      alert('Please write any text')

      return
    }

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

    deleteTodo(deleteButton)
    acceptedTodo(acceptedButton)
  }
}
