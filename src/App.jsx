import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  actionsState,
  optionsState,
  penColorState,
} from "./initialStates/initialStates";

import Header from "./components/header/header";
import useMousePosition from "./components/footer/footer";
import Main from "./components/main/main";
import { Cursor } from "./components/cursor/cursor";

import * as htmlToImage from "html-to-image";

const createFileName = (extension = "", ...names) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};

function App() {
  const ref = useRef(null);

  const [actions, setActions] = useState(actionsState);
  const [active, setActive] = useState("Cursor");
  const [penSize, setPenSize] = useState();
  const [penColor, setPenColor] = useState(penColorState);
  const [options, setOptions] = useState(optionsState);
  const [colors, setColors] = useState(optionsState);
  const [showPicker, setShowPicker] = useState(false);
  const { posX, posY } = useMousePosition();

  const screenShot = useCallback(() => {
    if (actions[4].action == true) downloadScreenshot();
  }, [actions]);

  useEffect(() => {
    screenShot();
  }, [actions]);

  const changeActiveHandler = (id) => {
    const cloneActions = [...actions];
    cloneActions.forEach((item) => (item.action = false));

    cloneActions.forEach((item) => {
      if (item.id == id) {
        item.action = true;
        setActive(item.title);
        setPenSize(item.fontSize);
      }
    });

    setActions(cloneActions);
  };

  const changeColorHandler = () => {
    const cloneOptions = [...colors];
    cloneOptions.forEach((item) => (item.action = !item.action));
    setColors(cloneOptions);
    setShowPicker(!showPicker);
  };
  const chooseColorHandler = (color) => {
    setPenColor(color.rgb);
  };

  const closeColorHandler = (id) => {
    setShowPicker(false);
  };

  const takeScreenShot = async (node) => {
    const dataURI = await htmlToImage.toJpeg(node);
    return dataURI;
  };

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <>
      <Header
        actions={actions}
        options={options}
        colors={colors}
        chooseColor={chooseColorHandler}
        changeColor={changeColorHandler}
        closeColor={closeColorHandler}
        penColor={penColor}
        showPicker={showPicker}
        changeActiveHandler={changeActiveHandler}
      />
      <Main
        refA={ref}
        type={active}
        render={(mouse) => (
          <Cursor pos={mouse} type={active} color={penColor} size={penSize} />
        )}
      />

      <footer className="Footer">
        <h2 className=" h2">{`X : ${posX}`}</h2>
        <h2 className=" h2">{`Y : ${posY}`}</h2>
      </footer>
    </>
  );
}

export default App;
