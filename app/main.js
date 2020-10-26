import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";


//TODO Dont forget to register all your controllers	
class App {
  constructor() {
    this.quoteController = new QuoteController()
    this.imageController = new ImageController()
    this.weatherController = new WeatherController()
    this.todoController = new TodoController()
  }
}


window["app"] = new App();