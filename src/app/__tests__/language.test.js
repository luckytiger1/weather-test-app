import { language } from "../utils/variables";
import Language from "../language/language";

describe("Language module", () => {
  const lang = new Language();
  test("Expected english flag to be truthy", () => {
    lang.changeLangFlag("en");
    expect(language.english).toBeTruthy();
  });

  test("Expected english flag to be falsy", () => {
    lang.changeLangFlag("be");
    expect(language.english).toBeFalsy();
  });

  test("Expected language flag to be ru", () => {
    lang.changeLangFlag("ru");
    expect(language.lang).toBe("ru");
  });

  test("Expected language locale to be ru-RU", () => {
    lang.changeLangFlag("ru");
    expect(language.locale).toBe("ru-RU");
  });

  test("Expected language locale not to be en-US", () => {
    lang.changeLangFlag("be");
    expect(language.locale).not.toBe("en-US");
  });
});
