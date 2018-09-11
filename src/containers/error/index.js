import React, { Component } from 'react'
import { H1 } from '~/components/core/text'
import Container from '~/components/core/container'
import { connect } from 'react-redux'
import { reset } from '~/redux/actions/form'

class ErrorContainer extends Component {
  // Reset form on mount
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(reset())
  }

  render() {
    return (
      <Container>
        <H1>An error occured whilst submitting your data</H1>
      </Container>
    )
  }
}

export default connect(state => state)(ErrorContainer)
