import ImageController from "./Controllers/ImageController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";


//TODO Dont forget to register all your controllers	
class App {
  constructor() {
    this.imageController = new ImageController();
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
  }
}


window["app"] = new App();