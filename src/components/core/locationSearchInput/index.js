import React from 'react'
import _ from 'lodash'
import Div from '~/components/core/div'
import PlacesAutocomplete from 'react-places-autocomplete'
import TextInput from '~/components/core/textInput'
import { Text } from '~/components/core/text'
import style from './style'

// Location search component
// Text input with automatic dropdow for suggested locations
class LocationSearchInput extends React.Component {
  // handleChange - calls the update location action
  handleChange(address) {
    const { updateLocation } = this.props

    updateLocation(address)
  }

  render() {
    const { location, id } = this.props

    return (
      <PlacesAutocomplete value={location} onChange={newLocation => this.handleChange(newLocation)} onSelect={newLocation => this.handleChange(newLocation)}>
        {/* Arguments passed down from <PlacesAutocomplete /> */}
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Div id={id} className={style.container}>
            {/* Address text input */}
            <TextInput {...getInputProps()} />

            {/* Styled container for suggestions */}
            <Div className={style.suggestionsContainer}>
              {/* Display Loading... text if loading, else display suggestions */}
              {loading ? (
                <Text>Loading...</Text>
              ) : (
                _.map(suggestions, suggestion => {
                  return (
                    <Div {...getSuggestionItemProps(suggestion)}>
                      <Text>{suggestion.description}</Text>
                    </Div>
                  )
                })
              )}
            </Div>
          </Div>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default LocationSearchInput
