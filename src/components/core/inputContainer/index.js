import React from 'react'
import Div from '~/components/core/div'
import style from './style'

// Container for a form input
export default props => {
  const { children } = props
  return <Div className={style.inputContainer}>{children}</Div>
}
