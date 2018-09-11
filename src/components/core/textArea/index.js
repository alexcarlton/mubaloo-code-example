import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

// TextArea component with default styling
export default props => {
  const { className } = props

  return <textarea {...props} className={classNames(style.textArea, className)} />
}
