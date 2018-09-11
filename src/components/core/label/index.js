import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

// Label component with default styling
export default props => {
  const { children, className } = props

  return (
    <label {...props} className={classNames(style.label, className)}>
      {children}
    </label>
  )
}
