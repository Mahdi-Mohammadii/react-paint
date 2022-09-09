import React, { useState } from "react";
import "./main.css";

const Main = ({ refA, type, render, setIsHovering }) => {
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
      ref={refA}
      className={type == "Cursor" ? null : "main"}
      style={{ height: "80vh", background: "#fff" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {render(position)}
    </div>
  );
};

export default Main;
