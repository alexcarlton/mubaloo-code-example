import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateLocation, updateCurrentDateTime, updateFeedback, submitUserData } from '~/redux/actions/form'
import StepTwo from '~/components/stepTwo'
import formSelector from '~/redux/selectors/form'

class StepTwoContainer extends Component {
  render() {
    const { dispatch, form } = this.props
    const { location, currentDateTime, feedback, stepTwoComplete, submittingData, submissionError, dataSubmitted } = form

    return (
      <StepTwo
        currentDateTime={currentDateTime}
        updateCurrentDateTime={newCurrentDateTime => dispatch(updateCurrentDateTime(newCurrentDateTime))}
        location={location}
        updateLocation={newLocation => dispatch(updateLocation(newLocation))}
        feedback={feedback}
        updateFeedback={newFeedback => dispatch(updateFeedback(newFeedback))}
        stepTwoComplete={stepTwoComplete}
        submissionError={submissionError}
        submittingData={submittingData}
        submitUserData={() => dispatch(submitUserData())}
        dataSubmitted={dataSubmitted}
      />
    )
  }
}

export default connect(state => ({ form: formSelector(state) }))(StepTwoContainer)
