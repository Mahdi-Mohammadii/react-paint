import React from 'react'
import HeaderActions from '../header-actions/header-actions'; 
import './header.css';
const Header = (props) => {
    
  return (
    <header className='header'>
      <HeaderActions actions={props.actions}
       colors={props.colors}
        active={props.changeActiveHandler}
         change={props.changeColor}
          penColor={props.penColor}
           showPicker={props.showPicker}
            chooseColor={props.chooseColor}
            closeColor={props.closeColor} />
    </header>
  )
}

export default Header