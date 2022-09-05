import React from 'react'
import ActionsItems from './actions-items/actions-items'

import './header-actions.css'
const HeaderActions = ({actions,active}) => {
    const elements = actions.map((item,index) => <ActionsItems active={active} key={index} item={item} />)

  return (
    <section className='header__actions'>
    {elements}
    </section>
  )
}

export default HeaderActions