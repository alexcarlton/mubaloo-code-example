import React from 'react'
import style from './style'

export const H1 = props => {
  const { children } = props

  return (
    <h1 {...props} className={style.h1}>
      {children}
    </h1>
  )
}
