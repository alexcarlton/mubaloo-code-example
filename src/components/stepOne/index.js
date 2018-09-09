import React from 'react'
import Container from '~/components/core/container'
import DropDown from '~/components/core/dropDown'
import titles from './titles'

export default props => {
  const { updateTitle } = props

  return (
    <Container>
      <DropDown options={titles} onChange={selection => updateTitle(selection.value)} />
    </Container>
  )
}
