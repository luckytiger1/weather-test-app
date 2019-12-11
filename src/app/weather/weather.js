/* eslint-disable class-methods-use-this */
import Time from "../time/time";
import Language from "../language/language";
import { language, degreeVar } from "../utils/variables";

export default class Weather {
  constructor() {
    this.language = new Language();
  }

  // eslint-disable-next-line consistent-return
  async getWeatherInfo(latData, lngData) {
    try {
      this.language.checkLang();
      const url = `https://shrouded-mountain-28496.herokuapp.com/https://api.darksky.net/forecast/3643624e77a83db665635e089f8dff7d/${latData},${lngData}?units=si&lang=${language.lang}`;
      const response = await fetch(url);
      const myJson = await response.json();
      return myJson;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  async setWeatherInfo(latData, lngData) {
    const degree = document.querySelector(
      ".current-location-block__info-wrapper--temp"
    );
    const summary = document.querySelector(".summary");
    const appTemp = document.querySelector(".feels-like");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");
    const day1Weather = document.querySelector(".day1-temp");
    const day2Weather = document.querySelector(".day2-temp");
    const day3Weather = document.querySelector(".day3-temp");
    const icons = ["icon1", "icon2", "icon3", "icon4"];
    const myJson = await this.getWeatherInfo(latData, lngData);
    const time = new Time();
    time.setTime(myJson.timezone);

    for (let i = 0; i <= 4; i += 1) {
      this.setIcon(icons[i], myJson.daily.data[i].icon);
    }

    [
      day1Weather.textContent,
      day2Weather.textContent,
      day3Weather.textContent,
      degree.textContent,
      summary.textContent,
      appTemp.textContent,
      wind.textContent,
      humidity.textContent
    ] = [
      `${Math.floor(myJson.daily.data[1].temperatureHigh)}°`,
      `${Math.floor(myJson.daily.data[2].temperatureHigh)}°`,
      `${Math.floor(myJson.daily.data[3].temperatureHigh)}°`,
      ` ${Math.floor(myJson.currently.temperature)}°`,
      myJson.currently.summary,
      `${Math.ceil(myJson.currently.apparentTemperature)}°`,
      ` ${Math.floor(myJson.currently.windSpeed)}m/s`,
      ` ${Math.floor(myJson.currently.humidity * 100)}%`
    ];

    if (degreeVar.fahrenheit) {
      this.changeDegree();
    }
  }

  changeDegree() {
    const dayWeather = [
      document.querySelector(".day1-temp"),
      document.querySelector(".day2-temp"),
      document.querySelector(".day3-temp"),
      document.querySelector(".feels-like"),
      document.querySelector(".current-location-block__info-wrapper--temp")
    ];
    for (let i = 0; i < 5; i += 1) {
      if (degreeVar.celsius) {
        dayWeather[i].textContent = `${Math.round(
          ((parseInt(dayWeather[i].textContent, 10) - 32) * 5) / 9
        )}°`;
      } else if (degreeVar.fahrenheit) {
        dayWeather[i].textContent = `${Math.round(
          (parseInt(dayWeather[i].textContent, 10) * 9) / 5 + 32
        )}°`;
      }
    }
  }

  // English summary for Unsplash's search query
  async englishSummary(latData, lngData) {
    const url = `https://shrouded-mountain-28496.herokuapp.com/https://api.darksky.net/forecast/3643624e77a83db665635e089f8dff7d/${latData},${lngData}?units=si&lang=en`;
    const response = await fetch(url);
    const myJson = await response.json();
    return myJson.currently.summary;
  }

  async setIcon(item, icon) {
    // eslint-disable-next-line no-undef
    const skycons = new Skycons({ color: "white" });
    const iconData = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    // eslint-disable-next-line no-undef
    return skycons.add(item, Skycons[iconData]);
  }
}
