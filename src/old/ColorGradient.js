/* eslint-env es6 */

class ColorPoint {
  constuctor({ red, green, blue, value }) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.value = value;
  }
}

class ColorGradient {
  constructor() {
    this.createDefaultHeatMapGradient();
  }

  //-- Places a 5 color heapmap gradient into the "color" vector:
  createDefaultHeatMapGradient() {
    this.color = [];
    this.color.push(new ColorPoint(0, 0, 1, 0.0)); // Blue.
    this.color.push(new ColorPoint(0, 1, 1, 0.25)); // Cyan.
    this.color.push(new ColorPoint(0, 1, 0, 0.5)); // Green.
    this.color.push(new ColorPoint(1, 1, 0, 0.75)); // Yellow.
    this.color.push(new ColorPoint(1, 0, 0, 1.0)); // Red.
  }

  getColorAtValue(value) {
    if (!this.color) {
      throw Error();
    }

    const rgb = (prevC, currC, fractBetween) => ({
      red: (prevC.r - currC.r) * fractBetween + currC.r,
      green: (prevC.g - currC.g) * fractBetween + currC.g,
      blue: (prevC.b - currC.b) * fractBetween + currC.b
    });

    for (let i = 0; i < color.length; i++) {
      const currC = this.color[i];
      if (value < currC.val) {
        const prevC = this.color[Math.max(0, i - 1)];
        let valueDiff = prevC.val - currC.val;
        let fractBetween = valueDiff == 0 ? 0 : (value - currC.val) / valueDiff;
        return rgb(prevC, currC, fractBetween);
      }
    }

    const { red, green, blue } = this.color(-1);
    return { red, green, blue };
  }
}

export default ColorGradient;
