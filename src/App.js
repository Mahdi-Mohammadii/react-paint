import React, {useState,useEffect} from 'react';
import {actionsState,optionsState,penColorState,penSizeState} from './initialStates/initialStates'

import Header from './components/header/header'
import './App.css';

function App() {
  const [actions,setActions] = useState(actionsState)
  const [penColor,setPenColor] = useState(penColorState)
  const [penSize,setPenSize] = useState(penSizeState)
  const [options,setOptions] = useState(optionsState)

  useEffect(() => {

  })

  const changeActiveHandler = (id) => {
    const cloneActions = [...actions]
    cloneActions.forEach(item => item.action = false)
    
    cloneActions.forEach(item => {
      if(item.id == id) item.action = true
    })

    setActions(cloneActions)
  }

  const changeColorHandler = () => {

  }

  const changeSizeHandler = () => {

  }


  return (
    <>
      <Header 
      actions={actions} 
      options={options}
      changeColor={changeColorHandler}
      changeSizeHandler={changeSizeHandler}
      changeActiveHandler={changeActiveHandler}
      />
    </>
  );
}

export default App;
