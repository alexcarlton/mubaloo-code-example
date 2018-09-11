import React from 'react'
import DropDown from 'react-select'
import classNames from 'classnames'
import style from './style.scss'

// Dropdown component from the react-select library, with default styling
export default props => {
  const { className } = props

  return <DropDown {...props} className={classNames(style.dropDownContainer, className)} />
}
