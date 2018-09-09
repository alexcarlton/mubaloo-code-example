import React from 'react'
import Container from '~/components/core/container'
import Div from '~/components/core/div'
import DropDown from '~/components/core/dropDown'
import Label from '~/components/core/label'
import TextInput from '~/components/core/textInput'
import DatePicker from '~/components/core/datePicker'
import titles from './titles'
import style from './style'

const InputContainer = props => {
  const { children } = props
  return <Div className={style.inputContainer}>{children}</Div>
}

export default props => {
  const { updateTitle, updateName, updateDateOfBirth, dateOfBirth, name, title } = props

  return (
    <Container className={style.inputsContainer}>
      <InputContainer>
        <Label htmlFor="titleInput">Title</Label>
        <DropDown id="titleInput" value={title} options={titles} onChange={selection => updateTitle(selection)} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="nameInput">Name</Label>
        <TextInput id="nameInput" onChange={event => updateName(event.target.value)} value={name} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="dateOfBirthInput">Date of Birth</Label>
        <DatePicker id="dateOfBirthInput" value={dateOfBirth} onChange={event => updateDateOfBirth(event.target.value)} />
      </InputContainer>
    </Container>
  )
}
