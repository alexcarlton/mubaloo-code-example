import { createSelector } from 'reselect-change-memoize'
import moment from 'moment'

const calculateStepOneError = (title, name, dateOfBirth) => {
  const emptyString = ''

  return !title || name === emptyString || dateOfBirth === emptyString
}

export default createSelector(
  'form',
  state => state.form,
  formState => {
    return {
      ...formState,
      stepOneError: calculateStepOneError(formState.title, formState.name, formState.dateOfBirth),
      currentDateTime: formState.currentDateTime || moment().format('YYYY-MM-DDTHH:mm'),
    }
  },
)
