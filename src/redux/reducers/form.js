/* eslint-disable no-shadow */
const initialState = {
  title: null,
  name: '',
}

export default function form(state = initialState, action) {
  switch (action.type) {
    case 'form/UPDATE_TITLE':
      return { ...state, title: action.payload }
    case 'form/UPDATE_NAME':
      return { ...state, name: action.payload }
    default:
      return state
  }
}
