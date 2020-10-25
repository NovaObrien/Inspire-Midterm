export default class Todo {
  constructor({ _id, description, completed }) {
    this._id = _id;
    this.description = description
    this.completed = completed
  }

  get Template() {
    return /*html*/ `
      <div class="row m-2 shadow-lg">
        <div class="col">
        <button class="close text-danger" onclick="app.todoController.removeTodo('${this._id}')">&times</button>
        <h2>${this.description}</h2>
        <button class="btn btn-success btn-sm" onclick="app.todoController.toggleTodoStatus('${this._id}')">Done</button>
        </div>
      </div>
    `
  }
}