import React from 'react'
import Container from '~/components/core/container'
import InputContainer from '~/components/core/inputContainer'
import InputsContainer from '~/components/core/inputsContainer'
import Div from '~/components/core/div'
import Geosuggest from '~/components/core/geoSuggest'
import Label from '~/components/core/label'
import TextInput from '~/components/core/textInput'
import DatePicker from '~/components/core/datePicker'
import LinkButton from '~/components/core/linkButton'
import { H1 } from '~/components/core/text'
import titles from './titles'

export default props => {
  const { updateTitle, updateName, updateDateOfBirth, dateOfBirth, name, title, stepOneError } = props

  return (
    <InputsContainer>
      <H1>Step 2</H1>
      <InputContainer>
        <Label htmlFor="locationInput">Location</Label>
        <Geosuggest />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="nameInput">Name</Label>
        <TextInput id="nameInput" onChange={event => updateName(event.target.value)} value={name} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="dateOfBirthInput">Date of Birth</Label>
        <DatePicker id="dateOfBirthInput" value={dateOfBirth} onChange={event => updateDateOfBirth(event.target.value)} />
      </InputContainer>
      <InputContainer>
        <LinkButton disabled={stepOneError} to="/thanks">
          submit
        </LinkButton>
      </InputContainer>
    </InputsContainer>
  )
}