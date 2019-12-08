export default class Time {
  async setTime(time) {
    let dateDataText = document.querySelector(
      '.current-location-block__date-container--date',
    );
    let timeDataText = document.querySelector(
      '.current-location-block__date-container--time',
    );
    let newDate = new Date();
    const options = {
      weekday: 'short',
      year: 'numeric',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: time,
      hourCycle: 'h24',
    };
    let dData = newDate.toLocaleDateString('en-US', options);
    let date = dData.split(',');

    dateDataText.innerHTML = date[0] + ' ' + date[1];
    timeDataText.innerHTML = date[3];
    let nextWeekDayData = [];
    let days = [
      document.querySelector('.day1'),
      document.querySelector('.day2'),
      document.querySelector('.day3'),
    ];
    for (let i = 0; i < 3; i += 1) {
      nextWeekDayData[i] = new Date();
      nextWeekDayData[i].setDate(nextWeekDayData[i].getDate() + i);
      days[i].textContent = nextWeekDayData[i].toLocaleDateString('en-US', {
        weekday: 'long',
      });
    }
  }
}
