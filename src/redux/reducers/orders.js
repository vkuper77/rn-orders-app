import { LOAD_ORDERS, DELETE_ORDER, REPEAT_ORDER } from '../types/types'

const initialState = {
  orders: [],
  loading: true,
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      }

    case DELETE_ORDER:
      return {
        orders: state.orders.filter((item) => item.id !== action.payload),
      }
    case REPEAT_ORDER:
      return { ...state, orders: [...state.orders, action.payload] }

    default:
      return state
  }
}
