import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

// Button with default styling
export default props => {
  const { className, disabled, children } = props

  return (
    <button {...props} className={classNames(style.button, className, { [style.disabled]: disabled })}>
      {children}
    </button>
  )
}
