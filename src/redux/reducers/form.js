/* eslint-disable no-shadow */
const initialState = {
  title: null,
}

export default function form(state = initialState, action) {
  switch (action.type) {
    case 'form/UPDATE_TITLE':
      return { ...state, title: action.payload }
    default:
      return state
  }
}
