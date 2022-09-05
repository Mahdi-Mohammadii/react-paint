import React from 'react'
import HeaderActions from '../header-actions/header-actions'

import './header.css';
const Header = (props) => {
    
  return (
    <header className='header'>
      <HeaderActions actions={props.actions} active={props.changeActiveHandler} />
    </header>
  )
}

export default Header