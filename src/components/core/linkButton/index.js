import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import style from './style.scss'

// React router DOM link component, styled as a button
export default props => {
  const { children, className, disabled } = props

  return (
    <Link {...props} className={classNames(style.linkButton, className, { [style.disabled]: disabled })}>
      {children}
    </Link>
  )
}
