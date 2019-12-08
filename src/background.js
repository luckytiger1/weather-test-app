export default class Background {
  async getInfo() {
    let apiKey =
      'b481b89c0ee2f5f32cf18d3b49e966275b9a5bce2cd7926f8902610eef4929a1';
    let url = `https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  async setBackground() {
    let data = await this.getInfo();
    console.log(data);
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('${data.urls.full}') no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
  }
}
