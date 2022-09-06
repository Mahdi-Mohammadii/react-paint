import React from "react";
import "./main.css";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }
  render() {
    return (
      <div
        className={this.props.type == "Cursor" ? null : "main"}
        style={{ height: "100vh" }}
        onMouseMove={this.handleMouseMove}
      >
      </div>
    );
  }
}

export default Main