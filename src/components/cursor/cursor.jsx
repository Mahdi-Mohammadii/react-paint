export const Cursor = (props) => {
  const position = props.pos;
  const type = props.type;
  const color = props.color;
  const size = props.size;

  let style = {
    position: "absolute",
    left: position.x,
    top: position.y,
    backgroundColor: color,
    border: "none",
    borderRadius: "0",
    cursor: "none",
    width: size,
    height: size,
    border: "1px solid black",
  };
};
