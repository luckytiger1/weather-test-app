import { language, degreeVar } from './variables';
import Address from './address.js';
import Weather from './weather';
import Background from './background';

export default class EventHandler {
  constructor() {
    this.address = new Address();
    this.weather = new Weather();
    this.background = new Background();
  }

  langHandler() {
    const langBtn = document.querySelectorAll('.lang-btn');
    document.querySelector('#en').addEventListener('click', () => {
      this.changeLangFlag('eng');
      const lng = parseFloat(document.querySelector('.longitude').textContent);
      const lat = parseFloat(document.querySelector('.latitude').textContent);
      [].forEach.call(langBtn, (el) => {
        el.classList.remove('active');
      });
      console.log(`eng click lang =  ${language.lang}`);

      document.querySelector('#en').classList.add('active');
      console.log(`eng click: ${lat} and ${lng}`);

      this.translateText(0);
      this.address.setAddress(language.lang, lat, lng);
    });
    document.querySelector('#rus').addEventListener('click', () => {
      this.changeLangFlag('rus');
      const lng = parseFloat(document.querySelector('.longitude').textContent);
      const lat = parseFloat(document.querySelector('.latitude').textContent);
      [].forEach.call(langBtn, (el) => {
        el.classList.remove('active');
      });
      document.querySelector('#rus').classList.add('active');
      console.log(`rus click: ${lat} and ${lng}`);

      this.translateText(1);
      console.log(`rus click lang =  ${language.lang}`);
      this.address.setAddress(language.lang, lat, lng);
    });
    document.querySelector('#be').addEventListener('click', () => {
      this.changeLangFlag('be');
      const lng = parseFloat(document.querySelector('.longitude').textContent);
      const lat = parseFloat(document.querySelector('.latitude').textContent);
      [].forEach.call(langBtn, (el) => {
        el.classList.remove('active');
      });
      console.log(`be click lang = ${language.lang}`);

      document.querySelector('#be').classList.add('active');
      console.log(`be click: ${lat} and ${lng}`);
      this.translateText(2);
      this.address.setAddress(language.lang, lat, lng);
    });
  }
  degreeHandler() {
    const degreeBtn = document.querySelectorAll('.degree-btn');

    document.querySelector('#cel').addEventListener('click', () => {
      [].forEach.call(degreeBtn, (el) => {
        el.classList.remove('active');
      });
      this.changeDegreeFlag('cel');
      document.querySelector('#cel').classList.add('active');
      this.weather.changeDegree();
      document.querySelector('#fahr').disabled = false;
      document.querySelector('#cel').disabled = true;
    });
    document.querySelector('#fahr').addEventListener('click', () => {
      [].forEach.call(degreeBtn, (el) => {
        el.classList.remove('active');
      });
      this.changeDegreeFlag('fahr');
      document.querySelector('#fahr').classList.add('active');
      this.weather.changeDegree();
      document.querySelector('#fahr').disabled = true;
      document.querySelector('#cel').disabled = false;
    });
  }
  bgHandler() {
    document.querySelector('#bg-change').addEventListener('click', () => {
      const lng = parseFloat(document.querySelector('.longitude').textContent);
      const lat = parseFloat(document.querySelector('.latitude').textContent);
      this.background.setBackground(lat, lng);
    });
  }
  inputHandler() {
    document.querySelector('.mdc-fab').addEventListener('click', () => {
      let loc = document.querySelector('.mdc-text-field__input').value;
      reverseLoc(language.lang, loc);
    });
  }
  translateText(n) {
    let feelsLikeData = ['Feels Like', 'По ощущению', 'По ощущению'];
    let windData = ['Wind', 'Ветер', 'Вецер'];
    let humidityData = ['Humidity', 'Влажность', 'вільготнасць'];
    let latitudeData = ['latitude', ' широта', 'шырата'];
    let longitudeData = ['longitude', ' долгота', 'даўгата'];
    [
      document.querySelector('.feelsLikeTitle').textContent,
      document.querySelector('.windTitle').textContent,
      document.querySelector('.humidityTitle').textContent,
      document.querySelector('.latitudeTitle').textContent,
      document.querySelector('.longitudeTitle').textContent,
    ] = [
      feelsLikeData[n].toUpperCase(),
      windData[n].toUpperCase(),
      humidityData[n].toUpperCase(),
      latitudeData[n].toUpperCase(),
      longitudeData[n].toUpperCase(),
    ];
  }
  changeLangFlag(n) {
    if (n === 'rus') {
      language.russian = true;
      language.english = false;
      language.belarusian = false;
      language.lang = 'ru';
    }
    if (n === 'eng') {
      language.russian = false;
      language.english = true;
      language.belarusian = false;
      language.lang = 'en';
    }
    if (n === 'be') {
      language.russian = false;
      language.english = false;
      language.belarusian = true;
      language.lang = 'be';
    }
  }
  changeDegreeFlag(n) {
    if (n === 'cel') {
      degreeVar.celsius = true;
      degreeVar.fahrenheit = false;
    }
    if (n === 'fahr') {
      degreeVar.celsius = false;
      degreeVar.fahrenheit = true;
    }
  }
}
