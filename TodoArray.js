let array = []

export class TodoArray {
  constructor() {
    this.array = array
  }

  addingTodoInArray(todo) {
    this.array.push(todo)
  }

  deleteTodoInArray(index) {
    this.array.splice(index, 1)
  }

  acceptedTodoInArray() {
    this.array.isDone = todo.isDone
  }
}
  