import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTitle, updateName, updateDateOfBirth } from '~/redux/actions/form'
import StepOne from '~/components/stepOne'

class StepOneContainer extends Component {
  render() {
    const { dispatch, form } = this.props
    const { name, title, dateOfBirth } = form

    return (
      <StepOne
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

export default connect(state => state)(StepOneContainer)
