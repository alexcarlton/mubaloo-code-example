import React from 'react'
import style from './style.scss'

export default props => {
  const { children } = props

  return (
    <div className={style.hello} {...props}>
      {children}
    </div>
  )
}
