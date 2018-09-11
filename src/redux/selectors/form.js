import { createSelector } from 'reselect-change-memoize'
import moment from 'moment'

const emptyString = ''

const calculateStepOneComplete = (title, name, dateOfBirth) => {
  return title && name !== emptyString && dateOfBirth !== emptyString
}

const calculateStepTwoComplete = (feedback, location) => {
  return feedback !== emptyString && location !== emptyString
}

// Create new state derived from redux state
export default createSelector(
  'form',
  state => state.form,
  formState => {
    return {
      ...formState,
      stepOneComplete: calculateStepOneComplete(formState.title, formState.name, formState.dateOfBirth),
      stepTwoComplete: calculateStepTwoComplete(formState.feedback, formState.location),
      currentDateTime: formState.currentDateTime || moment().format('YYYY-MM-DDTHH:mm'),
    }
  },
)
