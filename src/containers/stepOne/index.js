import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementValue } from '~/redux/actions/form'
import StepOne from '~/components/stepOne'

class StepOneContainer extends Component {
  render() {
    const { dispatch, form } = this.props
    const { value } = form

    return <StepOne value={value} incrementValue={() => dispatch(incrementValue())} />
  }
}

export default connect(state => ({ form: state.form }))(StepOneContainer)
