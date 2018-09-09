import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

export default props => {
  const { className } = props

  return <input {...props} type="text" className={classNames(style.textInput, className)} />
}
