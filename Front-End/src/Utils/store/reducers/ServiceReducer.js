import * as a from "../../constant";

const initialState = {
  services: [],
};

const listServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_SERVICE:
      return { ...state, services: action.payload };
    case a.ADD_DATA_SERVICE:
      const services = state.services.concat(action.payload);
      return { ...state, services };

    case a.DELETE_DATA_SERVICE:
      return {
        ...state,
        services: action.payload,
      };
    case a.UPDATE_DATA_SERVICE:
      return {
        ...state,
        services: state.services.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return state;
  }
};

export default listServiceReducer;
