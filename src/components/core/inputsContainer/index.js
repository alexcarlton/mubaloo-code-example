import React from 'react'
import classNames from 'classnames'
import Container from '~/components/core/container'
import style from './style.scss'

// Container for form inputs
export default props => {
  const { children, className } = props

  return (
    <Container {...props} className={classNames(style.inputsContainer, className)}>
      {children}
    </Container>
  )
}
