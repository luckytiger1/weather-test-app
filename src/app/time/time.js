/* eslint-disable class-methods-use-this */
import {
  language,
  beLongDay,
  beLongMonth,
  beShortDay
} from "../utils/variables";

export default class Time {
  async setTime(time) {
    let dData;
    const nextWeekDayData = [];
    const days = [
      document.querySelector(".day1"),
      document.querySelector(".day2"),
      document.querySelector(".day3")
    ];
    const dateDataText = document.querySelector(
      ".current-location-block__date-container--date"
    );
    const options = {
      weekday: "short",
      year: "numeric",
      day: "numeric",
      month: "long",
      timeZone: time
    };
    const newDate = new Date();
    this.checkLocale();
    if (language.locale === "ru-RU" || language.locale === "en-US") {
      dData = newDate.toLocaleDateString(language.locale, options);
      const date = dData.split(",");
      dateDataText.textContent = `${date[0]} ${date[1]}`;
    } else if (language.locale === "be-BY") {
      dateDataText.textContent = `${beShortDay[newDate.getDay()]} ${
        beLongMonth[newDate.getMonth()]
      } ${newDate.getDate()}`;
    }
    for (let i = 0; i < 3; i += 1) {
      nextWeekDayData[i] = new Date();
      nextWeekDayData[i].setDate(nextWeekDayData[i].getDate() + i + 1);
      if (language.locale === "ru-RU" || language.locale === "en-US") {
        days[i].textContent = nextWeekDayData[i].toLocaleDateString(
          language.locale,
          {
            weekday: "long"
          }
        );
      } else if (language.locale === "be-BY") {
        console.log(`weekday is ${new Date().getDay() + i + 1}`);
        if (new Date().getDay() + i + 1 > 6) {
          days[i].textContent = beLongDay[(new Date().getDay() + i) % 6];
        } else {
          days[i].textContent = beLongDay[new Date().getDay() + i + 1];
        }
      }
    }
    this.updateTime(time);
  }

  updateTime(time) {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: time,
      hourCycle: "h24"
    };
    const timeDataText = document.querySelector(
      ".current-location-block__date-container--time"
    );

    const today = new Date();
    const dData = today.toLocaleDateString(language.locale, options);
    timeDataText.textContent = `${dData.split(",")[1]}`;
    setTimeout(() => this.updateTime(), 60000);
  }

  checkLocale() {
    if (language.russian) {
      language.locale = "ru-RU";
    } else if (language.english) {
      language.locale = "en-US";
    } else if (language.belarusian) {
      language.locale = "be-BY";
    } else {
      language.locale = "en-US";
    }
  }
}
