/* eslint-disable class-methods-use-this */
import Weather from "../weather/weather";
import Time from "../time/time";
import Background from "../background/background";
import Map from "../map/map";
import { language } from "../utils/variables";

export default class Address {
  constructor() {
    this.weather = new Weather();
    this.time = new Time();
    this.background = new Background();
    this.map = new Map();
  }

  async getAddress(lang, lat, lng, location) {
    let url;
    if (lat && lng) {
      url = `https://api.opencagedata.com/geocode/v1/json?language=${lang}&q=${lat},${lng}&key=3a2037453ead4e659f98e482b785428b`;
    } else {
      url = `https://api.opencagedata.com/geocode/v1/json?language=${lang}&q=${location}&key=3a2037453ead4e659f98e482b785428b`;
    }
    console.log(`url is ${url}`);
    const response = await fetch(url);
    const myJson = await response.json();
    console.log(myJson);
    return myJson;
  }

  async setAddress(lang, lat, lng, location) {
    // if(language.russian){
    //   language.lang = 'ru'
    // } else if (language.english){
    //   language.lang = 'en'
    // } else if (language.belarusian){
    //   language.lang = 'be'
    console.log(
      `language lang on ${lang} click is ${language.lang} setAddress function`
    );
    // }
    const myJson = await this.getAddress(lang, lat, lng, location);
    const latitude = document.querySelector(".latitude");
    const longitude = document.querySelector(".longitude");
    const city = document.querySelector(".current-location-block__title");
    console.log(`myJson is ${myJson}`);

    if (myJson.results[0].components.city) {
      city.innerHTML = `${myJson.results[0].components.city}, ${myJson.results[0].components.country}`;
    } else if (myJson.results[0].components.county) {
      city.innerHTML = `${myJson.results[0].components.county}, ${myJson.results[0].components.country}`;
    } else {
      city.innerHTML = `${myJson.results[0].components.state}, ${myJson.results[0].components.country}`;
    }
    this.time.setTime(myJson.results[0].annotations.timezone.name);
    latitude.innerHTML = lat.toFixed(5);
    longitude.innerHTML = lng.toFixed(5);
  }

  async reverseLocation(lang, location) {
    const url = `https://api.opencagedata.com/geocode/v1/json?language=en&q=${location}&key=3a2037453ead4e659f98e482b785428b`;

    console.log(url);
    const response = await fetch(url);
    const myJson = await response.json();
    console.log(myJson);
    // return myJson;
    this.time.setTime(myJson.results[0].annotations.timezone.name);
    this.background.setBackground(
      myJson.results[0].geometry.lat,
      myJson.results[0].geometry.lng
    );
    this.weather.setWeatherInfo(
      myJson.results[0].geometry.lat,
      myJson.results[0].geometry.lng
    );
    this.setAddress(
      lang,
      myJson.results[0].geometry.lat,
      myJson.results[0].geometry.lng
    );
    this.map.initMap(
      myJson.results[0].geometry.lat,
      myJson.results[0].geometry.lng
    );
  }
}
