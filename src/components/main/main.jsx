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
        ref={this.props.refA}
        className={this.props.type == "Cursor" ? null : "main"}
        style={{ height: "80vh", background: "#fff" }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
};

export default Main;
