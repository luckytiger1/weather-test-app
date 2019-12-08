import { styles } from './map-styles.js';

export default class Map {
  async initMap(latData, longData) {
    let map = new google.maps.Map(document.querySelector('#map'), {
      center: { lat: parseFloat(latData), lng: parseFloat(longData) },
      zoom: 12,
      styles,
    });
    let marker = new google.maps.Marker({
      position: { lat: parseFloat(latData), lng: parseFloat(longData) },
      map: map,
    });
  }
}
