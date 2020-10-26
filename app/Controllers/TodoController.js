import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ""
  let todos = ProxyState.todos
  todos.forEach(t => template += t.Template)
  document.getElementById("todoId").innerHTML =/*html*/`<p>Current Todos: ${ProxyState.todos.length}</p>` + template
  gsap.to("#logoId", { duration: 2, x: 200, ease: "bounce", rotation: 10800, rotationX: 360 });

}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    todoService.getTodos();
    ProxyState.on("todos", _drawTodos)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();

    var form = e.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {
      description: form.description.value
    };

    // @ts-ignore
    document.getElementById("formId").reset()

    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}