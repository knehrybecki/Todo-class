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

    this.id = todo.attr('data-id')

    if (text === '') {
      alert('Please write any text')

      return
    }
    return todo
  }

  createAllButton() {
    const allButton = $('<div>', { class: 'todo__item-all-button' })

    return allButton
  }

  createDeleteButton() {
    const deleteButton = $('<button>', { class: 'todo__item-deleted' })

    return deleteButton

  }
  createAcceptedBuuton() {
    const acceptedButton = $('<button>', { class: 'todo__item-accepted' })

    return acceptedButton
  }
}
  