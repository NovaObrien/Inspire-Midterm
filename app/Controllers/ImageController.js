import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"
import Image from "../models/Image.js"
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImage() {
  let template = ProxyState.image.imageUrl
  console.log(ProxyState.image.imageUrl)

  document.getElementById("testId").style.backgroundImage = "url()" + template

}
export default class ImageController {
  constructor() {
    ProxyState.on("image", _drawImage)
    this.tryCatch()
    _drawImage
  }

  tryCatch() {
    try {
      imageService.getImageApi()
    } catch (error) {
      console.error(error);
    }
  }
}
