import {
  langBtnMarkup,
  tempBtnMarkup,
  bgBtnMarkup,
  searchBlockMarkup,
  currentLocationBlockMarkup,
  geolocationBlockMarkup,
  threeDaysBlockMarkup,
} from './markups.js';

export default class View {
  constructor() {
    this.tempBtnBlock = this.createElement('div', 'control-block__temp');
    this.bgBtnBlock = this.createElement('div', 'control-block__background');
    this.searchBlock = this.createElement('div', 'control-block__search');
    this.header = this.createElement('header', 'control-block container');
    this.langBlock = this.createElement('div', 'control-block__language');
    this.main = this.createElement('main', 'main-info container');
    this.weatherBlock = this.createElement('section', 'weather__container');
    this.currentLocationBlock = this.createElement(
      'section',
      'current-location-block',
    );
    this.geolocationBlock = this.createElement('section', 'geolocation-block');
    this.threeDaysBlock = this.createElement(
      'section',
      'three-days-block container',
    );

    this.langBlock.innerHTML = langBtnMarkup;
    this.tempBtnBlock.innerHTML = tempBtnMarkup;
    this.bgBtnBlock.innerHTML = bgBtnMarkup;
    this.searchBlock.innerHTML = searchBlockMarkup;
    this.currentLocationBlock.innerHTML = currentLocationBlockMarkup;
    this.geolocationBlock.innerHTML = geolocationBlockMarkup;
    this.threeDaysBlock.innerHTML = threeDaysBlockMarkup;
    this.weatherBlock.append(this.currentLocationBlock, this.geolocationBlock);
    this.header.append(
      this.langBlock,
      this.tempBtnBlock,
      this.bgBtnBlock,
      this.searchBlock,
    );
    this.main.append(this.weatherBlock, this.threeDaysBlock);
    document.body.prepend(this.header, this.main);
    this.summary = this.getElement('.summary');
    this.appTemp = this.getElement('.feels-like');
    this.wind = this.getElement('.wind');
    this.humidity = this.getElement('.humidity');
    this.day1Weather = this.getElement('.day1-temp');
    this.day2Weather = this.getElement('.day2-temp');
    this.day3Weather = this.getElement('.day3-temp');
    this.degree = this.getElement(
      '.current-location-block__info-wrapper--temp',
    );
  }
  addInnerHTML(element, markup) {
    element.innerHTML = markup;
  }
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;

    return element;
  }
  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }
  displayInfo() {
    console.log(this.degree);
  }
}
