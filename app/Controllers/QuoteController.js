import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";
//TODO Create methods for constructor, and rendering the quote to the page

function _drawQuote() {
  let template = ProxyState.quote.Template
  document.getElementById("quoteId").innerHTML = template
  gsap.from("#quoteId", { duration: 3, x: 300, opacity: 0, scale: 0.5 });
}
export default class QuoteController {
  constructor() {
    ProxyState.on("quote", _drawQuote)
    this.getQuote()
  }

  getQuote() {
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error);
    }
  }
}