import React, { useState, useEffect } from "react";
import "./footer.css"

export const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const getMousePos = e => {
      const posX = e.clientX;
      const posY = e.clientY;
      setMousePos({ posX, posY });
    };
    document.querySelector("#main").addEventListener("mousemove", getMousePos);
    return function cleanup() {
      document.removeEventListener("mousemove", getMousePos);
    };
  });
  return mousePos;
};
export default useMousePosition;