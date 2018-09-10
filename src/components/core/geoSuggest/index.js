import React from 'react'
import _ from 'lodash'
import Div from '~/components/core/div'
import PlacesAutocomplete from 'react-places-autocomplete'
import TextInput from '~/components/core/textInput'
import { Text } from '~/components/core/text'
import style from './style'

class LocationSearchInput extends React.Component {
  handleChange(address) {
    const { updateLocation } = this.props

    updateLocation(address)
  }

  render() {
    const { location, id } = this.props

    return (
      <PlacesAutocomplete value={location} onChange={newLocation => this.handleChange(newLocation)} onSelect={newLocation => this.handleChange(newLocation)}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Div id={id} className={style.container}>
            <TextInput {...getInputProps()} />
            <Div className={style.suggestionsContainer}>
              {loading && <Text>Loading...</Text>}
              {_.map(suggestions, suggestion => {
                return (
                  <Div {...getSuggestionItemProps(suggestion)}>
                    <Text>{suggestion.description}</Text>
                  </Div>
                )
              })}
            </Div>
          </Div>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default LocationSearchInput
