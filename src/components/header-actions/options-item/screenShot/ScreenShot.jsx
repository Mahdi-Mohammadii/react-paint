import React from 'react'
import '../colorPicker/ColorPicker'
const ScreenShot = ({item,active}) => {

    const activate = item.action ? 'active' : '' 
  return (
    <div onClick={() => active(item.id)} className={'actions-items ' + activate}>
        <img src={item.imageUrl} alt="screenshot-icon" />
        <p>{item.title}</p>
    </div>
  )
}

export default ScreenShot