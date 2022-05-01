import * as a from "../../constant";

const initialState = {
  bookrooms: [],
};

const listBookRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_BOOKROOM:
      return { ...state, bookrooms: action.payload };
    case a.ADD_DATA_BOOKROOM:
      const bookrooms = state.bookrooms.concat(action.payload);
      return { ...state, bookrooms };
    case a.UPDATE_DATA_BOOKROOM:
      return {
        ...state,
        bookrooms: state.bookrooms.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case a.DELETE_DATA_BOOKROOM:
      return {
        ...state,
        bookrooms: action.payload,
      };
    default:
      return state;
  }
};

export default listBookRoomReducer;
