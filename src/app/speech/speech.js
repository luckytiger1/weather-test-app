import { language } from "../utils/variables";

/* eslint-disable class-methods-use-this */
export default class Speech {
  speechToText() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    this.setRecognitionLang(recognition);
    recognition.interimResults = true;
    const audio = new Audio(
      "https://www.pacdv.com/sounds/interface_sound_effects/beep-3.wav"
    );
    audio.play();

    document
      .querySelector(".mdc-floating-label")
      .classList.add("mdc-floating-label--float-above");
    document
      .querySelector(".mdc-text-field--outlined")
      .classList.add("mdc-text-field--focused");
    document
      .querySelector(".mdc-notched-outline--upgraded")
      .classList.add("mdc-notched-outline--notched");
    document.querySelector(".mdc-notched-outline__notch").style.width =
      "55.25px";
    const inputArea = document.querySelector("#text-field-hero-input");

    recognition.addEventListener("result", e => {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

      inputArea.value = transcript;
      recognition.addEventListener("end", recognition.stop());
    });
    recognition.start();
  }

  setRecognitionLang(recognition) {
    const speech = recognition;
    if (language.russian || language.belarusian) {
      speech.lang = "ru-RU";
    } else if (language.english) {
      speech.lang = "en-US";
    }
  }
}
