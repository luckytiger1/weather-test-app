import Time from './time.js';
import { language, degreeVar } from './variables';

export default class Weather {
  async getWeatherInfo(latData, lngData) {
    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3643624e77a83db665635e089f8dff7d/${latData},${lngData}?units=si&lang=en`;
    console.log(url);
    let response = await fetch(url);
    let myJson = await response.json();
    console.log(myJson);
    return myJson;
  }
  async setWeatherInfo(latData, lngData) {
    let degree = document.querySelector(
      '.current-location-block__info-wrapper--temp',
    );
    let summary = document.querySelector('.summary');
    let appTemp = document.querySelector('.feels-like');
    let wind = document.querySelector('.wind');
    let humidity = document.querySelector('.humidity');
    let day1Weather = document.querySelector('.day1-temp');
    let day2Weather = document.querySelector('.day2-temp');
    let day3Weather = document.querySelector('.day3-temp');
    let icons = ['icon1', 'icon2', 'icon3', 'icon4'];
    let myJson = await this.getWeatherInfo(latData, lngData);
    let time = new Time();
    time.setTime(myJson.timezone);
    for (let i = 0; i <= 4; i += 1) {
      this.setIcon(icons[i], myJson.daily.data[i].icon);
    }

    day1Weather.textContent = `${Math.floor(
      myJson.daily.data[1].temperatureHigh,
    )}°`;
    day2Weather.textContent = `${Math.floor(
      myJson.daily.data[2].temperatureHigh,
    )}°`;
    day3Weather.textContent = `${Math.floor(
      myJson.daily.data[3].temperatureHigh,
    )}°`;

    degree.textContent = ` ${Math.floor(myJson.currently.temperature)}°`;
    summary.textContent = myJson.currently.summary;
    appTemp.textContent = `${Math.ceil(myJson.currently.apparentTemperature)}°`;
    wind.textContent = ` ${Math.floor(myJson.currently.windSpeed)}m/s`;
    humidity.textContent = ` ${Math.floor(myJson.currently.humidity * 100)}%`;
    if (degreeVar.fahrenheit) {
      changeDegree();
    }
  }
  changeDegree() {
    let dayWeather = [
      document.querySelector('.day1-temp'),
      document.querySelector('.day2-temp'),
      document.querySelector('.day3-temp'),
      document.querySelector('.feels-like'),
      document.querySelector('.current-location-block__info-wrapper--temp'),
    ];
    for (let i = 0; i < 5; i += 1) {
      if (degreeVar.celsius) {
        dayWeather[i].textContent = `${Math.round(
          ((parseInt(dayWeather[i].textContent) - 32) * 5) / 9,
        )}°`;
      } else if (degreeVar.fahrenheit) {
        dayWeather[i].textContent = `${Math.round(
          (parseInt(dayWeather[i].textContent) * 9) / 5 + 32,
        )}°`;
      }
    }
  }
  // checkLang() {
  //   if (language.russian) {
  //     lang = 'ru';
  //   } else if (language.english) {
  //     lang = 'en';
  //   } else if (language.belarusian) {
  //     lang = 'be';
  //   }
  //   return lang;
  // }
  async setIcon(item, icon) {
    let skycons = new Skycons({ color: 'white' });
    let iconData = icon.replace(/-/g, '_').toUpperCase();
    skycons.play();
    return skycons.add(item, Skycons[iconData]);
  }
}
