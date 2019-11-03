const initialState = {
  items: []
};

const fetchPosts = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default fetchPosts;
