// import {
//   fetchUsersRequest,
//   fetchUsersSuccess,
//   fetchUsersFailure
// } from "./index";

export const fetchUsers = () => {
  return function(dispatch) {
    // dispatch(fetchUsersRequest());
    fetch("https://jsonplaceholde.typicode.com/posts")
      //   .then(res => {
      //     res.json();
      //   })
      .then(json => {
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: json });
      })
      .catch(err => {
        // dispatch(fetchUsersFailure(err));
        console.log(err);
      });
  };
};
