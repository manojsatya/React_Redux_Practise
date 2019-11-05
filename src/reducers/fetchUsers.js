const initialState = {
  loading: false,
  posts: [],
  error: ""
};

const fetchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ""
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default fetchUsersReducer;
