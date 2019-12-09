/* eslint-disable class-methods-use-this */
import { language } from "../utils/variables";

export default class Time {
  async setTime(time) {
    const dateDataText = document.querySelector(
      ".current-location-block__date-container--date"
    );
    const timeDataText = document.querySelector(
      ".current-location-block__date-container--time"
    );
    const options = {
      weekday: "short",
      year: "numeric",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: time,
      hourCycle: "h24"
    };
    const newDate = new Date();

    const dData = newDate.toLocaleDateString(language.locale, options);
    const date = dData.split(",");
    console.log(dData);
    console.log(date);
    dateDataText.textContent = `${date[0]} ${date[1]}`;
    // eslint-disable-next-line prefer-destructuring
    if (language.locale === "en-US") {
      [timeDataText.textContent] = [date[3]];
    } else {
      [timeDataText.textContent] = [date[2]];
    }
    const nextWeekDayData = [];
    const days = [
      document.querySelector(".day1"),
      document.querySelector(".day2"),
      document.querySelector(".day3")
    ];

    for (let i = 0; i < 3; i += 1) {
      nextWeekDayData[i] = new Date();
      nextWeekDayData[i].setDate(nextWeekDayData[i].getDate() + i);
      days[i].textContent = nextWeekDayData[i].toLocaleDateString(
        language.locale,
        {
          weekday: "long"
        }
      );
    }
  }
}
