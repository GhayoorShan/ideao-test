import * as types from "./actionType";

const initialstate = {
  users: [],
  user: {},
  loading: false,
};
const usersReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.ADD_USER:
    case types.DELETE_USERS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default usersReducers;
