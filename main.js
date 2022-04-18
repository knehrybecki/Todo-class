import $ from 'jquery'
import './style/style.sass'
import './style/reset.css'
import { Todo } from './Todo.js'
import { TodoArray } from './TodoArray'

const inputText = $('.input-text')
const buttonAddTodo = $('.add-item')
const todoList = $('.todo__list')
const filterAll = $('.filter-all')
const filterTodo = $('.filter-todo')
const filterDone = $('.filter-done')


buttonAddTodo.click(() => {
  if (inputText.val() === '') {
    alert('Please write any text')

    return
  }

  const todo = new Todo(inputText.val())
  const todoArray = new TodoArray()

  todoArray.addingTodoInArray(todo)
  todo.createNewTodo().appendTo(todoList)

  const acceptedButton = todo.getAcceptButton()
  const deleteButton =  todo.getDeleteButton()

  acceptedTodo(acceptedButton, todo)
  deleteTodo(deleteButton, todoArray, todo)

  inputText.val(null)
})

const acceptedTodo = (acceptedButton, todo) => {
  acceptedButton.click(event => {
    if (todo.isDone) {
      $(event.target)
        .closest('li')
        .removeClass('checked')

      todo.unCheck.remove()

      return todo.markDoneTodo().appendTo(todo.acceptedButton)
    }

    $(event.target)
      .closest('li')
      .addClass('checked')

    todo.check.remove()

    todo.markDoneTodo().appendTo(todo.acceptedButton)
  })
}

const deleteTodo = (deleteButton, todoArray, todo) => {
  deleteButton.click(event => {
    $(event.target)
      .closest('li')
      .remove()

    const index = todoArray.array.findIndex(item => item.id === todo.id)

    todoArray.deleteTodoInArray(index)
  })
}

const filtersTodo = () => {
  filterAll.click(() => {
    $('.todo__item').show(500)
  })
  filterTodo.click(() => {
    $('.todo__item').show(500)
    $('.todo__item.checked').hide(400)
  })
  filterDone.click(() => {
    $('.todo__item').hide(400)
    $('.todo__item.checked').show(500)
  })
}

filtersTodo()
