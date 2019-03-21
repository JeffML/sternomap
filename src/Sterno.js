// see TODO.md
/* eslint-env node */
/* (written in some C-like language):
bool getHeatMapColor(float value, float *red, float *green, float *blue)
[
  const int NUM_COLORS = 4;
  static float color[NUM_COLORS][3] = [ [0,0,1], [0,1,0], [1,1,0], [1,0,0] ];
    // A static array of 4 colors:  (blue,   green,  yellow,  red) using [r,g,b] for each.
  
  int idx1;        // |-- Our desired color will be between these two indexes in "color".
  int idx2;        // |
  float fractBetween = 0;  // Fraction between "idx1" and "idx2" where our value is.
  
  if(value <= 0)      [  idx1 = idx2 = 0;            ]    // accounts for an input <=0
  else if(value >= 1)  [  idx1 = idx2 = NUM_COLORS-1; ]    // accounts for an input >=0
  else
  [
    value = value * (NUM_COLORS-1);        // Will multiply value by 3.
    idx1  = floor(value);                  // Our desired color will be after this index.
    idx2  = idx1+1;                        // ... and before this index (inclusive).
    fractBetween = value - float(idx1);    // Distance between the two indexes (0-1).
  ]
    
  *red   = (color[idx2][0] - color[idx1][0])*fractBetween + color[idx1][0];
  *green = (color[idx2][1] - color[idx1][1])*fractBetween + color[idx1][1];
  *blue  = (color[idx2][2] - color[idx1][2])*fractBetween + color[idx1][2];
]
*/

class Sterno {
  static getHeatMapColor(value) {
    const NUM_COLORS = 4;
    // const color = new Array(NUM_COLORS);
    // color.fill([[0, 0, 1], [0, 1, 0], [1, 1, 0], [1, 0, 0]]);
    const color = [[0, 0, 1], [0, 1, 0], [1, 1, 0], [1, 0, 0]];

    let idx1 = 0,
      idx2 = 0;

    let fractBetween = 0;

    if (value <= 0) {
    } else if (value >= 1) {
      idx1 = idx2 = NUM_COLORS - 1;
    } else {
      const v = value * (NUM_COLORS - 1);
      idx1 = Math.floor(v);
      idx2 = idx1 + 1;
      fractBetween = v - idx1;
    }

    const rgb = {
      red: (color[idx2][0] - color[idx1][0]) * fractBetween + color[idx1][0],
      green: (color[idx2][1] - color[idx1][1]) * fractBetween + color[idx1][1],
      blue: (color[idx2][2] - color[idx1][2]) * fractBetween + color[idx1][2]
    };

    return rgb;
  }
}

export default Sterno;
