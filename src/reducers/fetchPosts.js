const initialState = {
  loading: false,
  posts: [],
  error: "",
  post: {}
};

const fetchPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ""
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload
      };
    case "CREATE_POST":
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
};

export default fetchPostsReducer;
