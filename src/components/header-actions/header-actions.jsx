import React from "react";
import ActionsItems from "./actions-items/actions-items";
import "./header-actions.css";
import ColorPicker from "./options-item/colorPicker/ColorPicker";
const HeaderActions = ({
  colors,
  actions,
  active,
  change,
  penColor,
  showPicker,
  chooseColor,
  closeColor,
}) => {
  const elements = actions.map((item, index) => (
    <ActionsItems active={active} key={index} item={item} />
  ));

  const ColorElement = colors.map((item, index) => (
    <ColorPicker
      chooseColor={chooseColor}
      showPicker={showPicker}
      closeColor={closeColor}
      penColor={penColor}
      change={change}
      key={index}
      item={item}
    />
  ));

  return (
    <>
      <section className="header__actions">{elements}</section>
      <section className="header__options">{ColorElement}</section>
    </>
  );
};

export default HeaderActions;
