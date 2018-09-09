import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

export default props => {
  const { children, className } = props

  return (
    <div {...props} className={classNames(style.flexDiv, className)}>
      {children}
    </div>
  )
}
