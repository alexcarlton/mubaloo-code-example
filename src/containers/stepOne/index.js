import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTitle } from '~/redux/actions/form'
import StepOne from '~/components/stepOne'

class StepOneContainer extends Component {
  render() {
    const { dispatch } = this.props

    return <StepOne updateTitle={title => dispatch(updateTitle(title))} />
  }
}

export default connect(state => state)(StepOneContainer)
