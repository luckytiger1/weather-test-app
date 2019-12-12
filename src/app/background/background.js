/* eslint-disable class-methods-use-this */
import Weather from "../weather/weather";

export default class Background {
  constructor() {
    this.weather = new Weather();
  }

  async getInfo(weatherInfo) {
    const season = this.getSeason();
    const dayTime = this.checkDayOrNight();
    const apiKey =
      "b481b89c0ee2f5f32cf18d3b49e966275b9a5bce2cd7926f8902610eef4929a1";
    const url = `https://api.unsplash.com/photos/random?query=nature,${weatherInfo},${season},${dayTime}&orientation=landscape&client_id=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async setBackground(lat, lng) {
    const weatherSummary = await this.weather.englishSummary(lat, lng);
    const data = await this.getInfo(weatherSummary);

    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('${data.urls.full}') no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
  }

  getSeason() {
    const month = new Date().getMonth();

    if (month >= 3 && month <= 5) {
      return "spring";
    }

    if (month >= 6 && month <= 8) {
      return "summer";
    }

    if (month >= 9 && month <= 11) {
      return "fall";
    }

    return "winter";
  }

  checkDayOrNight() {
    const dayTime = new Date().getHours();
    if (dayTime >= 6 && dayTime <= 20) {
      return "day";
    }
    return "night";
  }
}
