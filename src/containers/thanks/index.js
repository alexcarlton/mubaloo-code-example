import React, { Component } from 'react'
import { H1 } from '~/components/core/text'
import Container from '~/components/core/container'
import { connect } from 'react-redux'
import { reset } from '~/redux/actions/form'

class ThanksContainer extends Component {
  // Reset form on mount
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(reset())
  }

  render() {
    return (
      <Container>
        <H1>Thanks, your answers have been submitted!</H1>
      </Container>
    )
  }
}

export default connect(state => state)(ThanksContainer)
