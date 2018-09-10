import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateLocation, updateCurrentDateTime } from '~/redux/actions/form'
import StepTwo from '~/components/stepTwo'
import formSelector from '~/redux/selectors/form'

class StepTwoContainer extends Component {
  render() {
    const { dispatch, form } = this.props
    const { location, currentDateTime } = form

    return (
      <StepTwo
        currentDateTime={currentDateTime}
        updateCurrentDateTime={newCurrentDateTime => dispatch(updateCurrentDateTime(newCurrentDateTime))}
        location={location}
        updateLocation={newLocation => dispatch(updateLocation(newLocation))}
      />
    )
  }
}

export default connect(state => ({ form: formSelector(state) }))(StepTwoContainer)
