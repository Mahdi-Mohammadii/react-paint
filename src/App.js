import React, {useState,useEffect} from 'react';
import {actionsState,optionsState,penColorState,penSizeState} from './initialStates/initialStates'

import Header from './components/header/header'
import './App.css';

function App() {
  const [actions,setActions] = useState(actionsState)
  const [penColoe,setPenColor] = useState(penColorState)
  const [penSize,setPenSize] = useState(penSizeState)
  const [options,setOptions] = useState(optionsState)

  useEffect(() => {

  })



  return (
    <>
      <Header />
    </>
  );
}

export default App;
