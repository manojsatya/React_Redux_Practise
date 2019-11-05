import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "../reducers";

//--- MIDDLEWARE
// add middleware inside this function
const middleware = applyMiddleware(thunk);

const store = createStore(
  allReducers,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
