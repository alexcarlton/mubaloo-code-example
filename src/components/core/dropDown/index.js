import React from 'react'
import DropDown from 'react-select'
import classNames from 'classnames'
import style from './style.scss'

export default props => {
  const { className } = props

  return <DropDown {...props} className={classNames(style.dropDownContainer, className)} />
}
