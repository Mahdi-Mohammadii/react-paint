import React, { useState } from "react";
import "./main.css";
const Main = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      id="main"
      ref={props.refA}
      className={props.type == "Cursor" ? null : "main"}
      style={{ height: "80vh", background: "#fff" }}
      onMouseMove={handleMouseMove}
    >
      {props.render(position)}
    </div>
  );
};

export default Main;
