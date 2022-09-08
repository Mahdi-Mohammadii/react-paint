export const Cursor = ({ pos, type, color, size }) => {
  let style = {
    position: "absolute",
    left: pos.x,
    top: pos.y,
    backgroundColor:
      type === "Eraser"
        ? "#fff"
        : `rgba(${color.r},${color.g},${color.b},${color.a})`,
    borderRadius: type === "Pencil" || type === "Pen" ? "50%" : "0",
    cursor: "none",
    width: size,
    height: size,
    border: "1px solid black",
  };

  if (type == "Eraser") {
    style.backgroundColor = "#fff";
  } else if (type == "Pencil" || type == "Pen") {
    style.borderRadius = "50%";
  } else {
    style = { cursor: "curser" };
  }

  return <div style={style}></div>;
};
