import './styles/style.scss';
import View from './view.js';
import './weather.js';
import { MDCTextField } from '@material/textfield';
import { language } from './variables';
import Weather from './weather';
import Background from './background';
import Map from './map.js';
import Address from './address.js';
import EventHandler from './eventhandler.js';
class App {
  constructor() {}

  getLoc() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  getWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    weather.setWeatherInfo(latitude, longitude);
    map.initMap(latitude, longitude);
    address.setAddress(language.lang, latitude, longitude, location);
  }
  init() {
    app.getLoc();
    bg.setBackground();
    handler.langHandler();
    handler.degreeHandler();
    handler.inputHandler();
  }
}
const weather = new Weather();
const app = new App();
const view = new View();
const bg = new Background();
const map = new Map();
const address = new Address();
const handler = new EventHandler();
// const news = new News();
app.init();
