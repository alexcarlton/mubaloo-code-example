import _ from 'lodash'
import request from 'superagent'
import formSelector from '~/redux/selectors/form'

export const updateTitle = title => ({ type: 'form/UPDATE_TITLE', payload: title })

export const updateName = name => ({ type: 'form/UPDATE_NAME', payload: name })

export const updateDateOfBirth = dateOfBirth => ({ type: 'form/UPDATE_DATE_OF_BIRTH', payload: dateOfBirth })

export const updateLocation = location => ({ type: 'form/UPDATE_LOCATION', payload: location })

export const updateCurrentDateTime = currentDateTime => ({ type: 'form/UPDATE_CURRENT_DATE_TIME', payload: currentDateTime })

export const updateFeedback = feedback => ({ type: 'form/UPDATE_FEEDBACK', payload: feedback })

export const resetData = () => ({ type: 'form/RESET_DATA' })

export const submitUserData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'form/SUBMIT_USER_DATA_REQUEST' })
    const formData = formSelector(getState())
    const { title, name, dateOfBirth, location, currentDateTime, feedback } = formData

    try {
      await request
        .post('/answers')
        .send({
          title: _.get(title, 'label'),
          name,
          dateOfBirth,
          location,
          currentDateTime,
          feedback,
        })
        .set('Accept', 'application/json')
      dispatch({ type: 'form/SUBMIT_USER_DATA_SUCCESS' })
    } catch (error) {
      dispatch({ type: 'form/SUBMIT_USER_DATA_ERROR', payload: error })
      throw error
    }
  }
}
