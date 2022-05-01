import * as a from "../../constant";

const initialState = {
  users: [],
  roles: [],
  currentUserlogin: {},
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_USERS:
      return { ...state, users: action.payload };
    case a.ADD_DATA_USERS:
      const users = state.users.concat(action.payload);
      return { ...state, users };

    case a.UPDATE_DATA_USERS:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case a.DELETE_DATA_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case a.GET_DATA_ROLE:
      return { ...state, roles: action.payload };

    case a.GET_DATA_USERS_LOGIN:
      return { ...state, currentUserlogin: action.payload };
    case a.UPDATE_DATA_CURRENT_USERS:
      return {
        ...state,
        currentUserlogin: action.payload,
      };

    // case a.UPDATE_DATA_SERVICE:
    //   return { ...state, services: action.payload };

    default:
      return state;
  }
};

export default UsersReducer;
