import $ from 'jquery'
import { v4 as uuidv4 } from 'uuid'

export class Todo {
  #isDone
  #text
  #id

  constructor(text) {
    this.#isDone = false
    this.#text = text
    this.#id = uuidv4()
  }

  createNewTodo() {
    const todo = $('<li>', {
      class: 'todo__item',
      text: this.#text,
      'data-id': this.#id
    })

    this.allButton = $('<div>', { class: 'todo__item-all-button' })
      .appendTo(todo)

    return todo
  }

  getAcceptButton() {
    this.acceptedButton = $('<button>', { class: 'todo__item-accepted' })
      .appendTo(this.allButton)

    this.check = $('<i>', { class: 'fa-solid fa-check' })
      .appendTo(this.acceptedButton)

    this.unCheck = $('<i>', { class: "fa-solid fa-xmark" })

    return this.acceptedButton
  }

  getDeleteButton() {
    this.deleteButton = $('<button>', { class: 'todo__item-deleted' })
      .appendTo(this.allButton)

    $('<i>', { class: 'fa-solid fa-trash' })
      .appendTo(this.deleteButton)

    return this.deleteButton
  }

  markDoneTodo() {
    if (this.isDone) {
      this.isDone = false

      return this.check
    }

    this.isDone = true

    return this.unCheck
  }

  getIdToRemoveTodoInArray() {
   this.id = this.#id
  }
}
