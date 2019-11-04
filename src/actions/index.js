export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

// import {
//   fetchUsersRequest,
//   fetchUsersSuccess,
//   fetchUsersFailure
// } from "./index";

export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        dispatch(fetchUsersSuccess(res));
      })
      .catch(err => {
        dispatch(fetchUsersFailure(err));
      });
  };
};
