import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { clientReducer } from '../reducers/clients'
import { orderReducer } from '../reducers/orders'

const rootReducer = combineReducers({
  client: clientReducer,
  order: orderReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
