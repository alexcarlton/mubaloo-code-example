import React, { Component } from 'react'
import { Redirect } from 'react-router'
import InputContainer from '~/components/core/inputContainer'
import InputsContainer from '~/components/core/inputsContainer'
import Geosuggest from '~/components/core/geoSuggest'
import DateTimePicker from '~/components/core/dateTimePicker'
import Button from '~/components/core/button'
import Label from '~/components/core/label'
import TextArea from '~/components/core/textArea'
import { H1 } from '~/components/core/text'

class StepTwo extends Component {
  submitUserData() {
    const { submitUserData } = this.props

    submitUserData()
  }

  render() {
    const {
      feedback,
      updateFeedback,
      updateLocation,
      location,
      updateCurrentDateTime,
      currentDateTime,
      stepTwoComplete,
      submittingData,
      submissionError,
      dataSubmitted,
    } = this.props

    if (submissionError) {
      return <Redirect to="/error" />
    }

    if (dataSubmitted) {
      return <Redirect to="/thanks" />
    }

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
        <InputContainer>
          <Label htmlFor="feedbackInput">What did you think of this form?</Label>
          <TextArea id="feedbackInput" onChange={event => updateFeedback(event.target.value)} value={feedback} />
        </InputContainer>
        <InputContainer htmlFor="submitButton">
          <Button id="submitButton" disabled={!stepTwoComplete || submittingData} onClick={() => this.submitUserData()}>
            submit
          </Button>
        </InputContainer>
      </InputsContainer>
    )
  }
}

export default StepTwo
