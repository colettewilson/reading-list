import { createStore, compose } from "redux"
import Reducers from "./reducers"

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const Store = createStore(
  Reducers
)

export default Store