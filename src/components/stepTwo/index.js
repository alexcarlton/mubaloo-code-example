import React from 'react'
import InputContainer from '~/components/core/inputContainer'
import InputsContainer from '~/components/core/inputsContainer'
import Geosuggest from '~/components/core/geoSuggest'
import DateTimePicker from '~/components/core/dateTimePicker'
import Label from '~/components/core/label'
import { H1 } from '~/components/core/text'

export default props => {
  const { updateLocation, location, updateCurrentDateTime, currentDateTime } = props

  return (
    <InputsContainer>
      <H1>Step 2</H1>
      <InputContainer>
        <Label htmlFor="locationInput">Location</Label>
        <Geosuggest id="locationInput" updateLocation={updateLocation} location={location} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="currentDateTimeInput">Current date and time</Label>
        <DateTimePicker id="currentDateTimeInput" value={currentDateTime} onChange={event => updateCurrentDateTime(event.target.value)} />
      </InputContainer>
    </InputsContainer>
  )
}
