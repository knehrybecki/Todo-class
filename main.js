import './style/style.sass'
import './style/reset.css'
import { Todo } from './Todo.js'
import $ from 'jquery'

const inputText = $('.input-text')
const buttonAddTodo = $('.add-item')
const filtrAll = $('.filtr-all')
const filtrTodo = $('.filtr-todo')
const filtrDone = $('.filtr-done')

buttonAddTodo.click(() => {
  const todo = new Todo(inputText.val())
  todo.createNewTodo(inputText.val())
console.log(todo)
  inputText.val(null)
})

export const deleteTodo = (deleteButton) => {
  deleteButton.click(event => {
    $(event.target)
      .closest('li')
      .remove()
  })
}

export const acceptedTodo = (acceptedButton) => {
  acceptedButton.click(event => {
    $(event.target)
      .closest('li')
      .addClass('checked')

    Todo.isDone = true
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
