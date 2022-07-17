import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function hadleChangeColor(){
const newRandonColor=getRandomColor();
setColor(newRandonColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor}/>
      <Child onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
