import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import fetchUsersReducer from "./fetchPosts";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  fetchUsers: fetchUsersReducer
});

export default allReducers;
