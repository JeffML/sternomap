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

const getValues = (count) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(Math.random())
  }
  return arr;
}

const values = {
  y: getNames(30),
  x: getValues(300)
}

const cols = () => values.x.map(x => <td>{x}</td> );

const rows = () => 
  values.y.map( y => <tr>
    {cols()}
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
