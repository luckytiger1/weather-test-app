/* eslint-disable class-methods-use-this */
import { language, coords } from "../utils/variables";
import Address from "../address/address";
import Weather from "../weather/weather";
import Background from "../background/background";
import Speech from "../speech/speech";
import Degree from "../weather/degree";
import Language from "../language/language";
import Map from "../map/map";

export default class EventHandler {
  constructor() {
    this.address = new Address();
    this.weather = new Weather();
    this.background = new Background();
    this.speech = new Speech();
    this.degree = new Degree();
    this.language = new Language();
    this.map = new Map();
  }

  langHandler() {
    document.querySelector("#en").addEventListener("click", () => {
      this.langBtn("en", 0);
    });
    document.querySelector("#ru").addEventListener("click", () => {
      this.langBtn("ru", 1);
    });
    document.querySelector("#be").addEventListener("click", () => {
      this.langBtn("be", 2);
    });
  }

  onLoad() {
    document.addEventListener("DOMContentLoaded", () => {
      this.language.showActiveLang(localStorage.getItem("lang"));
      this.degree.showActiveDegree(localStorage.getItem("degree"));
    });
  }

  degreeHandler() {
    document.querySelector("#cel").addEventListener("click", () => {
      this.degree.changeDegreeFlag("cel");
      this.degree.changeState("cel");
      this.weather.changeDegree();
      localStorage.setItem("degree", "cel");

      document.querySelector("#fahr").disabled = false;
      document.querySelector("#cel").disabled = true;
    });
    document.querySelector("#fahr").addEventListener("click", () => {
      this.degree.changeDegreeFlag("fahr");
      this.degree.changeState("fahr");
      this.weather.changeDegree();
      localStorage.setItem("degree", "fahr");

      document.querySelector("#fahr").disabled = true;
      document.querySelector("#cel").disabled = false;
    });
  }

  bgHandler() {
    document.querySelector("#bg-change").addEventListener("click", () => {
      this.background.setBackground(coords.lat, coords.lng);
    });
  }

  inputHandler() {
    document.querySelector(".mdc-fab").addEventListener("click", () => {
      const loc = document.querySelector(".mdc-text-field__input").value;
      this.address.reverseLocation(language.lang, loc);
    });
    document
      .querySelector("#text-field-hero-input")
      .addEventListener("keydown", e => {
        if (e.keyCode === 13) {
          document.querySelector(".mdc-fab").click();
        }
      });
  }

  langBtn(lang, n) {
    this.address.showCoords(
      document.querySelector(".longitude").innerHTML,
      document.querySelector(".latitude").innerHTML
    );
    this.language.changeLangFlag(lang);
    this.language.changeState(lang);
    this.language.translateText(n);
    this.weather.setWeatherInfo(coords.lat, coords.lng);
    this.address.setAddress(language.lang, coords.lat, coords.lng);
    localStorage.setItem("lang", `${lang}`);
  }

  speechHandler() {
    document.querySelector(".speech-icon-link").addEventListener("click", e => {
      this.speech.speechToText();
      e.preventDefault();
    });
  }
}
