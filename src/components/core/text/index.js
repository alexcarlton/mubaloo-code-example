import React from 'react'
import style from './style'

// H1 component with default styling
export const H1 = props => {
  const { children } = props

  return (
    <h1 {...props} className={style.h1}>
      {children}
    </h1>
  )
}

// Text (p) component with default styling
export const Text = props => {
  const { children } = props

  return (
    <p {...props} className={style.p}>
      {children}
    </p>
  )
}
