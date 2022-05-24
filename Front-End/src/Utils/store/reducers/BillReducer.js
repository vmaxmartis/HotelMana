import * as a from "../../constant";

const initialState = {
  bills: {},
  paymentBills: [],
};

const BillReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_BILL:
      return { ...state, bills: action.payload };
    case a.CREATE_DATA_BILL:
      const paymentBills = state.paymentBills.concat(action.payload);
      return { ...state, paymentBills };

    default:
      return state;
  }
};

export default BillReducer;
