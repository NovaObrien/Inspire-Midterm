import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";


let url = 'Tanner/todos/'

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    let results = res.data.data.map(rawData => new Todo(rawData))
    ProxyState.todos = results
    console.log(url)
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    this.getTodos()
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todo.completed == false) {
      todo.completed = true
    } else {
      todo.completed = false
      console.log

    }
    console.log(todo.completed)
    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    let res = await api.delete(url + todoId)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;