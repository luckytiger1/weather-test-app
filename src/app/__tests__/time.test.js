// import { Degree } from "../app/weather/degree";
import Time from "../time/time";
import { language } from "../utils/variables";

describe("Time module", () => {
  const time = new Time();

  test("Expected to get correct locale", () => {
    language.russian = true;
    language.english = false;
    language.belarusian = false;
    time.checkLocale();
    expect(language.locale).toBe("ru-RU");
  });

  test("Expected to get correct locale", () => {
    language.russian = false;
    language.english = true;
    language.belarusian = false;
    time.checkLocale();
    expect(language.locale).toBe("en-US");
  });

  test("Expected to get correct locale", () => {
    language.russian = false;
    language.english = false;
    language.belarusian = true;
    time.checkLocale();
    expect(language.locale).toBe("be-BY");
  });
});
