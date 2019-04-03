import React, { useState } from "react";
import Sterno from "./Sterno";
import casual from "casual-browserify";

const getNames = (count) => {
  const set = new Set()
  for (let i = 0; i < count; i++) {
    set.add(casual.name)
  }
  return Array.from(set);
}

const getValues = (ycount, count) => {
  const arr = new Array(ycount).fill().map(e => []);
  for (let y = 0; y < ycount; y++) {
    for (let i = 0; i < count; i++) {
      arr[y].push(Math.random())
    }
  }
  return arr;
}

const values = {
  y: getNames(3),
  x: getValues(3, 30)
}

const background = (v) => {
  const rgb = Sterno.getHeatMapColor(v);
  console.log({rgb})
  return `rgb(${rgb.red*100}%, ${rgb.green*100}%, ${rgb.blue*100}%)`;
}

const cols = (y) => values.x[y].map(x => <td><div style={{background: background(x), height:'40px', width: '40px'}}></div></td> );

const rows = () => 
  values.y.map( (y, i) => <tr>
    <td>{y}</td>{cols(i)}
    </tr>
  );

const SternoMap = () => {
  return (
    <div>
      <table>
        <tbody>
          {rows()}
        </tbody>
      </table>
    </div>
  );
};

export default SternoMap;
