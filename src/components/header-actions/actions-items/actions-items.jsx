import React from "react";
import "./actions-items.css";

const ActionsItems = ({ item, active }) => {
  const activate = item.action ? "active" : "";

  return (
    <div
      onClick={() => active(item.id)}
      className={"actions-items " + activate}
    >
      <img src={item.imageUrl} alt="nav-image-icon" />
      <p>{item.title}</p>
    </div>
  );
};

export default ActionsItems;
