import React from 'react'
import Div from '~/components/core/div'
import classNames from 'classnames'
import style from './style.scss'

// Container for the app with default styling
export default props => {
  const { children, className } = props

  return (
    <Div className={style.outerContainer}>
      <Div {...props} className={classNames(style.container, className)}>
        {children}
      </Div>
    </Div>
  )
}
