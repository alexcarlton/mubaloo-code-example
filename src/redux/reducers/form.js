/* eslint-disable no-shadow */
const initialState = {
  title: null,
  name: '',
  dateOfBirth: '',
  location: '',
  currentDateTime: null,
  feedback: '',
  submittingData: false,
  submissionError: false,
  dataSubmitted: false,
}

export default function form(state = initialState, action) {
  switch (action.type) {
    case 'form/UPDATE_TITLE':
      return { ...state, title: action.payload }
    case 'form/UPDATE_NAME':
      return { ...state, name: action.payload }
    case 'form/UPDATE_DATE_OF_BIRTH':
      return { ...state, dateOfBirth: action.payload }
    case 'form/UPDATE_LOCATION':
      return { ...state, location: action.payload }
    case 'form/UPDATE_CURRENT_DATE_TIME':
      return { ...state, currentDateTime: action.payload }
    case 'form/UPDATE_FEEDBACK':
      return { ...state, feedback: action.payload }
    case 'form/SUBMIT_USER_DATA_REQUEST':
      return { ...state, submittingData: true }
    case 'form/SUBMIT_USER_DATA_SUCCESS':
      return { ...state, submittingData: false, dataSubmitted: true }
    case 'form/SUBMIT_USER_DATA_ERROR':
      return { ...state, submittingData: false, submissionError: true }
    case 'form/RESET_DATA':
      return { ...state, submissionError: false, dataSubmitted: false }
    default:
      return state
  }
}
