export default class Image {
  constructor(data) {
    this.imageUrl = data.large_url || data.url
  }
}