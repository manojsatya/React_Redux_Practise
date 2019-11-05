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

export const fetchUsers = () => {
  return function(dispatch) {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        res
          .json()
          .then(json =>
            dispatch({ type: "FETCH_USERS_SUCCESS", payload: json })
          );
      })
      .catch(err => {
        dispatch({ type: "FETCH_USERS_FAILURE", payload: err });
        console.log(err);
      });
  };
};
