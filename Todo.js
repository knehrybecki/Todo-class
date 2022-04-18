import $ from 'jquery'
import { v4 as uuidv4 } from 'uuid'
export class Todo {
  constructor(text) {
    this.isDone = false
    this.text = text
    this.id = uuidv4()
  }

  createNewTodo(text) {
    const todo = $('<li>', {
      class: 'todo__item',
      text,
      'data-id': this.id
    })

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

    return todo
  }
}
