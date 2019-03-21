import React, { useState } from "react";
import Sterno from "./Sterno";

const canvasStyle = {
  border: "1px solid #0F0",
  width: "50vw",
  // height:'100vw'
  height: "calc((100vw * 9) / 16)"
};
const buttonStyle = {
  marginBottom: "10px"
};
const star = () => {
  const cvs = document.getElementById("canvas"); //.context;
  if (cvs) {
    const ctx = cvs.getContext("2d");
    const value = Math.random();
    const rgb = Sterno.getHeatMapColor(value);
    console.log({ rgb });
    const fillRGB = `rgb(${Math.floor(255 * rgb.red)},${Math.floor(
      255 * rgb.green
    )},${Math.floor(255 * rgb.blue)})`;

    ctx.fillStyle = fillRGB; //"dodgerblue";
    const p = new Path2D("M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z");
    // p.moveTo(300, 303)
    const p2 = new Path2D(p);
    ctx.translate(40, 20);
    ctx.stroke(p2);
    ctx.fill(p2);
    // ctx.fillRect(20,20,150,75);
  }
};

const Canvas = () => {
  const [shape, setShape] = useState(star);

  return (
    <div>
      <button style={buttonStyle} onClick={() => setShape(star)}>
        {" "}
        <svg aria-hidden="true" viewBox="0 0 10 10">
          <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
        </svg>
        Star
      </button>
      <br />

      <canvas id="canvas" shape={shape} style={canvasStyle}>
        )
      </canvas>
    </div>
  );
};

export default Canvas;
