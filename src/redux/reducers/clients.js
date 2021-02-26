import { LOAD_CLIENTS, SIGN_IN, OUT_USER } from '../types/types'

const initialState = {
  clients: [],
  activeСlient: [],
  userToken: null,
}

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CLIENTS:
      return { ...state, clients: action.payload }
    case SIGN_IN:
      return { ...state, activeСlient: action.payload, userToken: true }
    case OUT_USER:
      return { ...state, activeСlient: [], userToken: null }
    default:
      return state
  }
}
