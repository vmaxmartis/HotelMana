import * as a from "../../constant";

const initialState = {
  rooms: [],
  typeRoom: [],
};

const listRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_ROOM:
      return { ...state, rooms: action.payload };
    case a.ADD_DATA_ROOM:
      const rooms = state.rooms.concat(action.payload);
      return { ...state, rooms };
    case a.UPDATE_DATA_ROOM:
      return {
        ...state,
        rooms: state.rooms.map((item) =>
          item.id == action.payload.id ? action.payload : item
        ),
      };
    case a.DELETE_DATA_ROOM:
      return {
        ...state,
        rooms: action.payload,
      };
    case a.GET_TYPE_DATA:
      return { ...state, typeRoom: action.payload };
    default:
      return state;
  }
};

export default listRoomReducer;
