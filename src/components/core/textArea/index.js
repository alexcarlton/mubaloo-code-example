import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

export default props => {
  const { className } = props

  return <textarea {...props} className={classNames(style.textArea, className)} />
}
