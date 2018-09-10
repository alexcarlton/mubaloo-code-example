import { createSelector } from 'reselect-change-memoize'
import moment from 'moment'

const calculateStepOneComplete = (title, name, dateOfBirth) => {
  const emptyString = ''

  return title && name !== emptyString && dateOfBirth !== emptyString
}

const calculateStepTwoComplete = (feedback, location) => {
  return feedback !== '' && location !== ''
}

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
