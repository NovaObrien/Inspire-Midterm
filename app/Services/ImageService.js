import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js";
import Image from "../models/Image.js"
//TODO create methods to retrieve data and save to the State
class ImageService {

  async getImageApi() {
    let res = await api.get("images")
    ProxyState.image = new Image(res.data)
    // template += 'col' + (ProxyState.image.imageUrl)
    // document.body.style.backgroundImage = template
  }
}

const imageService = new ImageService();
export default imageService;