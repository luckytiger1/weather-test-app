/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
import { degreeVar } from "../utils/variables";

export default class Degree {
  showActiveDegree(degree) {
    switch (degree) {
      case "cel": {
        degreeVar.celsius = true;
        this.changeState("cel");
        console.log(`degreeVar celsius value is ${degreeVar.celsius}`);
        console.log(`degreeVar fahrenheit value is ${degreeVar.fahrenheit}`);
        break;
      }
      case "fahr": {
        degreeVar.fahrenheit = true;
        this.changeState("fahr");
        console.log(`degreeVar celsius value is ${degreeVar.celsius}`);
        console.log(`degreeVar fahrenheit value is ${degreeVar.fahrenheit}`);
        break;
      }
      default:
    }
  }

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
