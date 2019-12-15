/* eslint-disable class-methods-use-this */
import {
  language,
  feelsLikeData,
  windData,
  humidityData,
  latitudeData,
  longitudeData,
  searchData,
  locationTranslation
} from "../utils/variables";

export default class Language {
  showActiveLang(lang) {
    switch (lang) {
      case "ru": {
        language.russian = true;
        language.lang = "ru";
        this.translateText(1);
        this.changeState("ru");
        break;
      }
      case "en": {
        language.english = true;
        language.lang = "en";
        this.translateText(0);
        this.changeState("en");
        break;
      }
      case "be": {
        language.belarusian = true;
        language.lang = "be";
        this.translateText(2);
        this.changeState("be");
        break;
      }
      default:
    }
  }

  changeState(n) {
    const langBtn = document.querySelectorAll(".lang-btn");

    [].forEach.call(langBtn, el => {
      el.classList.remove("active");
    });

    document.querySelector(`#${n}`).classList.add("active");
  }

  changeLangFlag(n) {
    if (n === "ru") {
      language.russian = true;
      language.english = false;
      language.belarusian = false;
      language.lang = "ru";
      language.locale = "ru-RU";
    }
    if (n === "en") {
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

  translateText(n) {
    [
      document.querySelector(".feelsLikeTitle").textContent,
      document.querySelector(".windTitle").textContent,
      document.querySelector(".humidityTitle").textContent,
      document.querySelector(".latitudeTitle").textContent,
      document.querySelector(".longitudeTitle").textContent,
      document.querySelector(".mdc-fab__label").textContent,
      document.querySelector(".mdc-floating-label").textContent
    ] = [
      feelsLikeData[n].toUpperCase(),
      windData[n].toUpperCase(),
      humidityData[n].toUpperCase(),
      latitudeData[n].toUpperCase(),
      longitudeData[n].toUpperCase(),
      searchData[n].toUpperCase(),
      locationTranslation[n]
    ];
  }

  checkLang() {
    if (language.russian) {
      language.lang = "ru";
    } else if (language.english) {
      language.lang = "en";
    } else if (language.belarusian) {
      language.lang = "be";
    } else {
      language.lang = "en";
    }
  }
}
