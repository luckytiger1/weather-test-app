import "../assets/styles/style.scss";
import { MDCTextField } from "@material/textfield";
import View from "./view/view";
import { language } from "./utils/variables";
import Weather from "./weather/weather";
import Background from "./background/background";
import Map from "./map/map";
import Address from "./address/address";
import EventHandler from "./events/eventhandler";

class App {
  constructor() {
    this.weather = new Weather();
    this.bg = new Background();
    this.map = new Map();
    this.address = new Address();
    this.handler = new EventHandler();
    // this.app = new App();
  }

  getLoc() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
    } else {
      // eslint-disable-next-line no-console
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getWeather(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    this.weather.setWeatherInfo(latitude, longitude);
    this.map.initMap(latitude, longitude);
    // eslint-disable-next-line no-restricted-globals
    this.address.setAddress(language.lang, latitude, longitude, location);
    this.bg.setBackground(latitude, longitude);
  }

  init() {
    // eslint-disable-next-line no-use-before-define
    app.getLoc();
    this.handler.langHandler();
    this.handler.degreeHandler();
    this.handler.inputHandler();
    this.handler.speechHandler();
    this.handler.onLoad();
    this.handler.bgHandler();
  }
}
const app = new App();

// eslint-disable-next-line no-unused-vars
const view = new View();
// const news = new News();
// eslint-disable-next-line no-unused-vars
const textField = new MDCTextField(document.querySelector(".mdc-text-field"));

app.init();
