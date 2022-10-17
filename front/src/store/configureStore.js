import { createStore, combineReducers,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authentication'
const composeEnhancers = window.__REDUX_DEVOOLS_EXTNSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      authentication: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk)),
  )
  return store
}