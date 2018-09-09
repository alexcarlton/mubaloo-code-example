import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTitle, updateName, updateDateOfBirth } from '~/redux/actions/form'
import StepOne from '~/components/stepOne'
import formSelector from '~/redux/selectors/form'

class StepOneContainer extends Component {
  render() {
    const { dispatch, form } = this.props
    const { name, title, dateOfBirth, stepOneError } = form

    return (
      <StepOne
        stepOneError={stepOneError}
        title={title}
        updateTitle={newTitle => dispatch(updateTitle(newTitle))}
        name={name}
        updateName={newName => dispatch(updateName(newName))}
        dateOfBirth={dateOfBirth}
        updateDateOfBirth={newDateOfBirth => dispatch(updateDateOfBirth(newDateOfBirth))}
      />
    )
  }
}

export default connect(state => ({ form: formSelector(state) }))(StepOneContainer)
