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

export const fetchPosts = () => {
  return function(dispatch) {
    dispatch({ type: "FETCH_POSTS_REQUEST" });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        res
          .json()
          .then(json =>
            dispatch({ type: "FETCH_POSTS_SUCCESS", payload: json })
          );
      })
      .catch(err => {
        dispatch({ type: "FETCH_POSTS_FAILURE", payload: err });
        console.log(err);
      });
  };
};

export const createPost = newPost => {
  console.log(newPost);
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(post => dispatch({ type: "CREATE_POST", payload: post }));
  };
};
