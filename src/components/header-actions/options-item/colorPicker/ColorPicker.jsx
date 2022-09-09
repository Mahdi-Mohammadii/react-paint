import React from "react";
import "../colorPicker/ColorPicker.css";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";

const ColorPicker = ({
  item,
  change,
  penColor,
  showPicker,
  chooseColor,
  closeColor,
}) => {
  const activatex = item.action ? "active" : "";

  const styles = reactCSS({
    default: {
      color: {
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        background: `rgba(${penColor.r}, ${penColor.g}, ${penColor.b}, ${penColor.a})`,
      },
      popover: {
        position: "absolute",
        zIndex: "3",
        top: 30,
        right: 150,
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        width: "100vw",
      },
      swatch: {
        padding: "6px",
        background: "#ffffff",
        borderRadius: "100%",
        cursor: "pointer",
        display: "inline-block",
        boxShadow: "0 0 0 1px rgba(0,0,0,.2)",
      },
    },
  });

  return (
    <div className={"options-items " + activatex}>
      <div style={styles.swatch} onClick={() => change(item.id)}>
        <div style={styles.color} />
      </div>

      <p>{item.title}</p>
      {showPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={closeColor}></div>
          <SketchPicker color={penColor} onChange={chooseColor} />
        </div>
      ) : null}
    </div>
  );
};
export default ColorPicker;
