import React, { useState, useEffect } from "react";
import {
  actionsState,
  optionsState,
  penColorState,
  penSizeState,
} from "./initialStates/initialStates";

import Header from "./components/header/header";
import Main from "./components/main/main";
import { Cursor } from "./components/cursor/cursor";

function App() {
  const [actions, setActions] = useState(actionsState);
  const [penSize, setPenSize] = useState();
  const [penColor, setPenColor] = useState(penColorState);
  const [options, setOptions] = useState(optionsState);

  useEffect(() => {});

  const changeActiveHandler = (id) => {
    const cloneActions = [...actions];
    cloneActions.forEach((item) => (item.action = false));

    cloneActions.forEach((item) => {
      if (item.id == id) item.action = true;
    });

    setActions(cloneActions);
  };

  const changeColorHandler = () => {};

  return (
    <>
      <Header
        actions={actions}
        options={options}
        changeColor={changeColorHandler}
        changeActiveHandler={changeActiveHandler}
      />
    </>
  );
}

export default App;
