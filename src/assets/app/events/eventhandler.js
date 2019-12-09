/* eslint-disable class-methods-use-this */
import {
  language,
  degreeVar,
  feelsLikeData,
  windData,
  humidityData,
  latitudeData,
  longitudeData
} from "../utils/variables";
import Address from "../address/address";
import Weather from "../weather/weather";
import Background from "../background/background";
import Speech from "../../speech";

export default class EventHandler {
  constructor() {
    this.address = new Address();
    this.weather = new Weather();
    this.background = new Background();
    this.speech = new Speech();
  }

  langHandler() {
    const langBtn = document.querySelectorAll(".lang-btn");
    document.querySelector("#en").addEventListener("click", () => {
      this.changeLangFlag("eng");
      const lng = parseFloat(document.querySelector(".longitude").textContent);
      const lat = parseFloat(document.querySelector(".latitude").textContent);
      [].forEach.call(langBtn, el => {
        el.classList.remove("active");
      });
      console.log(`eng click lang =  ${language.lang}`);

      document.querySelector("#en").classList.add("active");
      console.log(`eng click: ${lat} and ${lng}`);

      this.translateText(0);
      this.address.setAddress(language.lang, lat, lng);
    });
    document.querySelector("#rus").addEventListener("click", () => {
      this.changeLangFlag("rus");
      const lng = parseFloat(document.querySelector(".longitude").textContent);
      const lat = parseFloat(document.querySelector(".latitude").textContent);
      [].forEach.call(langBtn, el => {
        el.classList.remove("active");
      });
      document.querySelector("#rus").classList.add("active");
      console.log(`rus click: ${lat} and ${lng}`);

      this.translateText(1);
      console.log(`rus click lang =  ${language.lang}`);
      this.address.setAddress(language.lang, lat, lng);
    });
    document.querySelector("#be").addEventListener("click", () => {
      this.changeLangFlag("be");
      const lng = parseFloat(document.querySelector(".longitude").textContent);
      const lat = parseFloat(document.querySelector(".latitude").textContent);
      [].forEach.call(langBtn, el => {
        el.classList.remove("active");
      });
      console.log(`be click lang = ${language.lang}`);

      document.querySelector("#be").classList.add("active");
      console.log(`be click: ${lat} and ${lng}`);
      this.translateText(2);
      this.address.setAddress(language.lang, lat, lng);
    });
  }

  degreeHandler() {
    const degreeBtn = document.querySelectorAll(".degree-btn");

    document.querySelector("#cel").addEventListener("click", () => {
      [].forEach.call(degreeBtn, el => {
        el.classList.remove("active");
      });
      this.changeDegreeFlag("cel");
      document.querySelector("#cel").classList.add("active");
      this.weather.changeDegree();
      document.querySelector("#fahr").disabled = false;
      document.querySelector("#cel").disabled = true;
    });
    document.querySelector("#fahr").addEventListener("click", () => {
      [].forEach.call(degreeBtn, el => {
        el.classList.remove("active");
      });
      this.changeDegreeFlag("fahr");
      document.querySelector("#fahr").classList.add("active");
      this.weather.changeDegree();
      document.querySelector("#fahr").disabled = true;
      document.querySelector("#cel").disabled = false;
    });
  }

  bgHandler() {
    document.querySelector("#bg-change").addEventListener("click", () => {
      const lng = parseFloat(document.querySelector(".longitude").textContent);
      const lat = parseFloat(document.querySelector(".latitude").textContent);
      this.background.setBackground(lat, lng);
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
          const loc = document.querySelector(".mdc-text-field__input").value;
          this.address.reverseLocation(language.lang, loc);
        }
      });
  }

  speechHandler() {
    document.querySelector(".speech-icon-link").addEventListener("click", e => {
      this.speech.speechToText();
      e.preventDefault();
    });
  }

  translateText(n) {
    [
      document.querySelector(".feelsLikeTitle").textContent,
      document.querySelector(".windTitle").textContent,
      document.querySelector(".humidityTitle").textContent,
      document.querySelector(".latitudeTitle").textContent,
      document.querySelector(".longitudeTitle").textContent
    ] = [
      feelsLikeData[n].toUpperCase(),
      windData[n].toUpperCase(),
      humidityData[n].toUpperCase(),
      latitudeData[n].toUpperCase(),
      longitudeData[n].toUpperCase()
    ];
  }

  changeLangFlag(n) {
    if (n === "rus") {
      language.russian = true;
      language.english = false;
      language.belarusian = false;
      language.lang = "ru";
      language.locale = "ru-RU";
    }
    if (n === "eng") {
      language.russian = false;
      language.english = true;
      language.belarusian = false;
      language.lang = "en";
      language.locale = "en-US";
    }
    if (n === "be") {
      language.russian = false;
      language.english = false;
      language.belarusian = true;
      language.lang = "be";
      language.locale = "be-BY";
    }
  }

  changeDegreeFlag(n) {
    if (n === "cel") {
      degreeVar.celsius = true;
      degreeVar.fahrenheit = false;
    }
    if (n === "fahr") {
      degreeVar.celsius = false;
      degreeVar.fahrenheit = true;
    }
  }
}
