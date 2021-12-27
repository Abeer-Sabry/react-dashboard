import React from 'react'
import LgWidget from './LgWidget/LgWidget'
import SmWidget from './SmWidget/SmWidget'
import WidgetStyles from './WidgetStyles'

const Widget = () => {
  return (
    <WidgetStyles>
      <SmWidget/>
      <LgWidget/>
    </WidgetStyles>
  )
}

export default Widget
