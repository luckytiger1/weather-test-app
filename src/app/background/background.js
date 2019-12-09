/* eslint-disable class-methods-use-this */
import Weather from "../weather/weather";

export default class Background {
  constructor() {
    this.weather = new Weather();
  }

  async getInfo(weatherInfo) {
    const season = this.getSeason();
    console.log(`month is ${season}`);
    const apiKey =
      "b481b89c0ee2f5f32cf18d3b49e966275b9a5bce2cd7926f8902610eef4929a1";
    const url = `https://api.unsplash.com/photos/random?query=nature&${season}&${weatherInfo}&orientation=landscape&client_id=${apiKey}`;
    console.log(url);

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async setBackground(lat, lng) {
    const weatherSummary = await this.weather.getWeatherInfo(lat, lng);
    const data = await this.getInfo(weatherSummary.currently.summary);
    console.log(`data is ${weatherSummary.currently.summary}`);
    console.log(data);
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('${data.urls.full}') no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
  }

  getSeason() {
    const date = new Date();
    const month = date.getMonth();

    if (month >= 3 <= 5) {
      return "spring";
    }

    if (month >= 6 <= 8) {
      return "summer";
    }

    if (month >= 9 <= 11) {
      return "fall";
    }

    // Months 12, 01, 02
    return "winter";
  }
}
