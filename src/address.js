import Weather from './weather.js';
export default class Address {
  async getAddress(lang, lat, lng, location) {
    let url;
    if (lat && lng) {
      url = `https://api.opencagedata.com/geocode/v1/json?language=${lang}&q=${lat},${lng}&key=3a2037453ead4e659f98e482b785428b`;
    } else {
      url = `https://api.opencagedata.com/geocode/v1/json?language=${lang}&q=${location}&key=3a2037453ead4e659f98e482b785428b`;
    }
    console.log(`url is ${url}`);
    let response = await fetch(url);
    let myJson = await response.json();
    return myJson;
  }
  async setAddress(lang, lat, lng, location) {
    let myJson = await this.getAddress(lang, lat, lng, location);
    let latitude = document.querySelector('.latitude');
    let longitude = document.querySelector('.longitude');
    let city = document.querySelector('.current-location-block__title');
    console.log(`myJson is ${myJson}`);

    if (myJson.results[0].components.city) {
      city.innerHTML =
        myJson.results[0].components.city +
        ', ' +
        myJson.results[0].components.country;
    } else if (myJson.results[0].components.county) {
      city.innerHTML =
        myJson.results[0].components.county +
        ', ' +
        myJson.results[0].components.country;
    } else {
      city.innerHTML =
        myJson.results[0].components.state +
        ', ' +
        myJson.results[0].components.country;
    }

    latitude.innerHTML = lat.toFixed(5);
    longitude.innerHTML = lng.toFixed(5);
  }
}
