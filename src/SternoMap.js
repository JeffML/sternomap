import React, { useState } from "react";
import Sterno from "jsheatmap";
import casual from "casual-browserify";

const getNames = (count) => {
  const set = new Set()
  for (let i = 0; i < count; i++) {
    set.add(casual.word)
  }
  return Array.from(set);
}

const getValues = (ycount, count) => {
  const arr = new Array(ycount).fill().map(e => []);
  for (let y = 0; y < ycount; y++) {
    for (let i = 0; i < count; i++) {
      arr[y].push(y + i + 1)
    }
  }
  return arr;
}

const input = {
  labels: getNames(34),
  values: getValues(34, 30)
}

const headings = () => {
  const arr = new Array(30).fill(1);
  const titles = () => arr.map((a, i) => <th>{i}</th>)
  return (<tr><th></th>{titles()}</tr>);
}

const heatMap = new Sterno(headings(), input);

const data = heatMap.getData();

const background = (rgb) => {
  return `rgb(${rgb.red * 100}%, ${rgb.green * 100}%, ${rgb.blue * 100}%)`;
}

const cols = cells => {
  return cells.colors.map((c, i) => <td>
    <div style={{ background: background(c), height: '20px', width: '20px' }}>
      <span style={{ fontSize: '0.6em' }}>{cells.values[i].toFixed(1)}</span>
    </div>
  </td>);
}

const rows = row =>
  data.map((row, i) => <tr>
    <td>{row.name}</td>{cols(row.cells)}
  </tr>
  );

const SternoMap = () => {
  return (
    <div>
      <table>
        <tbody>
          {headings()}
          {rows()}
        </tbody>
      </table>
    </div>
  );
};

export default SternoMap;
