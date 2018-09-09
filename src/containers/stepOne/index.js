import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTitle, updateName } from '~/redux/actions/form'
import StepOne from '~/components/stepOne'

class StepOneContainer extends Component {
  render() {
    const { dispatch, form } = this.props
    const { name, title } = form

    return <StepOne title={title} updateTitle={newTitle => dispatch(updateTitle(newTitle))} name={name} updateName={newName => dispatch(updateName(newName))} />
  }
}

export default connect(state => state)(StepOneContainer)
