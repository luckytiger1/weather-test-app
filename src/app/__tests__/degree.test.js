import { degreeVar } from "../utils/variables";
import Degree from "../weather/degree";

const degree = new Degree();
describe("Degree flags", () => {
  test("Expected to get celsius flag to be truthy", () => {
    degree.changeDegreeFlag("cel");
    expect(degreeVar.celsius).toBeTruthy();
  });

  test("Expected to get fahrenheit flag to be truthy", () => {
    degree.changeDegreeFlag("fahr");
    expect(degreeVar.fahrenheit).toBe(true);
  });

  test("Expected to get fahrenheit flag to be truthy", () => {
    degree.changeDegreeFlag("fahr");
    expect(degreeVar.celsius).toBeFalsy();
  });
});
