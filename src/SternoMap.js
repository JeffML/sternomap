import React, { useState } from "react";
import Sterno, { Style } from "jsheatmap";
import casual from "casual-browserify";

const getLabels = (count) => {
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
      arr[y].push(y + i)
    }
  }
  return arr;
}

const ROWS = 20;
const COLS = 20;

const labels = getLabels(ROWS)
const values = getValues(ROWS, COLS)
const input = labels.map((label, i) => [label, values[i]])

const headings = (headings) => {
  const titles = () => headings.map(h => <th>{h}</th>)
  return (<tr><th></th>{titles()}</tr>);
}

console.dir(input, { depth: 3 })
const heatMap = new Sterno([...Array(COLS).keys()], input);

// const data = heatMap.getData({ style: Style.SIMPLE });
const data = heatMap.getData();
console.dir(data)

const background = (rgb) => {
  return `rgb(${rgb.red * 100}%, ${rgb.green * 100}%, ${rgb.blue * 100}%)`;
}

const cols = cells => {
  return cells.colors.map((c, i) => <td>
    <div style={{ background: background(c), height: '40px', width: '40px' }}>
      <span style={{ fontSize: '0.6em' }}>{cells.scales[i].toFixed(1)}</span>
    </div>
  </td>);
}

const rows = row =>
  data.rows.map((row, i) => <tr>
    <td>{row.label}</td>{cols(row.cells)}
  </tr>
  );

const SternoMap = () => {
  return (
    <div>
      <table>
        <tbody>
          {headings(data.headings)}
          {rows()}
        </tbody>
      </table>
    </div>
  );
};

export default SternoMap;
