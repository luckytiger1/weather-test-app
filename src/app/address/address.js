/* eslint-disable class-methods-use-this */
import Weather from "../weather/weather";
import Time from "../time/time";
import Background from "../background/background";
import Map from "../map/map";
import { coords } from "../utils/variables";

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

    const response = await fetch(url);
    const myJson = await response.json();

    return myJson;
  }

  async setAddress(lang, lat, lng, location) {
    const myJson = await this.getAddress(lang, lat, lng, location);
    const city = document.querySelector(".current-location-block__title-city");
    const country = document.querySelector(
      ".current-location-block__title-country"
    );
    console.log(myJson);

    city.innerHTML =
      myJson.results[0].components.city ||
      myJson.results[0].components.town ||
      myJson.results[0].components.village ||
      myJson.results[0].components.county ||
      myJson.results[0].components.state;
    country.innerHTML =
      myJson.results[0].components.country ||
      myJson.results[0].components.state;

    this.time.setTime(myJson.results[0].annotations.timezone.name);
    this.showCoords(
      myJson.results[0].annotations.DMS.lat,
      myJson.results[0].annotations.DMS.lng
    );

    coords.lat = myJson.results[0].geometry.lat;
    coords.lng = myJson.results[0].geometry.lng;
  }

  showCoords(lat, lng) {
    const latitude = document.querySelector(".latitude");
    const longitude = document.querySelector(".longitude");

    latitude.innerHTML = lat.substring(0, 7);
    longitude.innerHTML = lng.substring(0, 7);
  }

  async reverseLocation(lang, location) {
    const url = `https://api.opencagedata.com/geocode/v1/json?language=en&q=${location}&key=3a2037453ead4e659f98e482b785428b`;
    const response = await fetch(url);
    const myJson = await response.json();
    if (myJson.results[0] !== undefined) {
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
    } else {
      console.log(`Can't find location, try again.`);
    }
  }

  async getCoords() {
    const url = "https://ipinfo.io?token=6c0d24cfba6e13";
    const response = await fetch(url);
    const myJson = await response.json();
    return myJson;
  }
}
