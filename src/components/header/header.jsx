import React from "react";
import HeaderActions from "../header-actions/header-actions";
import "./header.css";
const Header = ({
  actions,
  colors,
  changeActiveHandler,
  changeColor,
  penColor,
  showPicker,
  chooseColor,
  closeColor,
}) => {
  return (
    <header className="header">
      <HeaderActions
        actions={actions}
        colors={colors}
        active={changeActiveHandler}
        change={changeColor}
        penColor={penColor}
        showPicker={showPicker}
        chooseColor={chooseColor}
        closeColor={closeColor}
      />
    </header>
  );
};

export default Header;
