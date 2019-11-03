import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import fetchPosts from "./fetchPosts";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  fetchPosts: fetchPosts
});

export default allReducers;
