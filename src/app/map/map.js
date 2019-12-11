/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
import styles from "./map-styles";
import Language from "../language/language";

export default class Map {
  constructor() {
    this.language = new Language();
  }

  async initMap(latData, longData) {
    const map = new google.maps.Map(document.querySelector("#map"), {
      center: { lat: parseFloat(latData), lng: parseFloat(longData) },
      zoom: 12,
      styles
    });
    // eslint-disable-next-line no-unused-vars
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(latData), lng: parseFloat(longData) },
      map
    });
  }
}
