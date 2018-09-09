import React from 'react'
import Container from '~/components/core/container'
import Div from '~/components/core/div'
import DropDown from '~/components/core/dropDown'
import Label from '~/components/core/label'
import TextInput from '~/components/core/textInput'
import titles from './titles'
import style from './style'

const InputContainer = props => {
  const { children } = props
  return <Div className={style.inputContainer}>{children}</Div>
}

export default props => {
  const { updateTitle, updateName, name, title } = props

  return (
    <Container className={style.inputsContainer}>
      <InputContainer>
        <Label htmlFor="title">Title</Label>
        <DropDown name="title" value={title} options={titles} onChange={selection => updateTitle(selection)} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="nameInput">Name</Label>
        <TextInput name="nameInput" id="nameInput" onChange={event => updateName(event.target.value)} value={name} />
      </InputContainer>
    </Container>
  )
}
