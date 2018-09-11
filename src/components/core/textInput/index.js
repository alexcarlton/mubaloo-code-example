import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

// Input component with default styling
export default props => {
  const { className } = props

  return <input {...props} type="text" className={classNames(style.textInput, className)} />
}
