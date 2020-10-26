export default class Todo {
  constructor({ _id, description, completed }) {
    this._id = _id;
    this.description = description
    this.completed = completed
  }

  get Template() {
    return /*html*/ `
      <div class="row m-2">
        <div class="col-12">
          <button class="close text-danger" onclick="app.todoController.removeTodo('${this._id}')">&times</button>
          <h5>${this.description}</h5>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="('${this._id}')">
            <label class="custom-control-label" for="('${this._id}')" onclick="app.todoController.toggleTodoStatus('${this._id}')">Mark Done</label>
          </div>
        </div>
      </div>
    `
  }
  // <div class="custom-control custom-checkbox">
  //           <input type="checkbox" class="custom-control-input" id="('${this._id}')">
  //           <label class="custom-control-label" for="('${this._id}')">Mark Done</label>
  //         </div>

  // <button class="btn btn-success btn-sm" onclick="app.todoController.toggleTodoStatus('${this._id}')"></button>
}