/* eslint-disable no-shadow */
const initialState = {
  title: null,
  name: '',
  dateOfBirth: '2000-01-01',
}

export default function form(state = initialState, action) {
  switch (action.type) {
    case 'form/UPDATE_TITLE':
      return { ...state, title: action.payload }
    case 'form/UPDATE_NAME':
      return { ...state, name: action.payload }
    case 'form/UPDATE_DATE_OF_BIRTH':
      return { ...state, dateOfBirth: action.payload }
    default:
      return state
  }
}
