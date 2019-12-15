/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* global google */
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

    const marker = new google.maps.Marker({
      position: { lat: parseFloat(latData), lng: parseFloat(longData) },
      map
    });

    const input = document.querySelector("#text-field-hero-input");
    const autoComplete = new google.maps.places.Autocomplete(input);
  }
}
