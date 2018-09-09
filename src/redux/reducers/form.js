/* eslint-disable no-shadow */
const initialState = {
  value: 0,
}

export default function form(state = initialState, action) {
  switch (action.type) {
    case 'form/INCREMENT_VALUE':
      return { ...state, value: state.value + 1 }
    default:
      return state
  }
}
