import {
  LOAD_CLIENTS,
  LOAD_ORDERS,
  SIGN_IN,
  OUT_USER,
  DELETE_ORDER,
  REPEAT_ORDER,
} from '../types/types'
import { clientRequest, orderRequest } from '../../dataBase/databaseQuery'

export const loadClients = () => {
  return async (dispatch) => {
    const clients = await clientRequest()
    dispatch({
      type: LOAD_CLIENTS,
      payload: clients,
    })
  }
}

export const signIn = (value) => {
  return {
    type: SIGN_IN,
    payload: value,
  }
}

export const outUser = () => {
  return {
    type: OUT_USER,
  }
}

export const loadOrders = (id) => {
  return async (dispatch) => {
    const orders = await orderRequest(id)
    dispatch({
      type: LOAD_ORDERS,
      payload: orders,
    })
  }
}

export const deleteOrder = (id) => {
  return {
    type: DELETE_ORDER,
    payload: id,
  }
}

export const repeatOrder = (value) => async (dispatch) => {
  dispatch({
    type: REPEAT_ORDER,
    payload: value,
  })
}
