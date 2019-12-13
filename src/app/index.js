/* eslint-disable no-unused-vars */
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
  }

  getLoc() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getWeather.bind(this),
        this.error.bind(this)
      );
    } else {
      // eslint-disable-next-line no-console
      console.log("Geolocation is not supported by this browser.");
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async error() {
    const response = await this.address.getCoords();
    const loc = response.loc.split(",");
    const coords = {
      latitude: loc[0],
      longitude: loc[1]
    };
    this.getWeather(coords);
  }

  getWeather(position) {
    let latitude;
    let longitude;
    if (position.coords) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    } else {
      latitude = position.latitude;
      longitude = position.longitude;
    }
    this.weather.setWeatherInfo(latitude, longitude);
    this.map.initMap(latitude, longitude);

    this.address.setAddress(language.lang, latitude, longitude);
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

const view = new View();
const textField = new MDCTextField(document.querySelector(".mdc-text-field"));

app.init();
