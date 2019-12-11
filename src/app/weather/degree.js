/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
import { degreeVar } from "../utils/variables";

export default class Degree {
  showActiveDegree(degree) {
    switch (degree) {
      case "cel": {
        degreeVar.celsius = true;
        this.changeState("cel");
        break;
      }
      case "fahr": {
        degreeVar.fahrenheit = true;
        this.changeState("fahr");
        break;
      }
      default:
    }
  }

  // Add 'active' class to active element
  changeState(n) {
    const degreeBtn = document.querySelectorAll(".degree-btn");
    [].forEach.call(degreeBtn, el => {
      el.classList.remove("active");
    });

    document.querySelector(`#${n}`).classList.add("active");
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
