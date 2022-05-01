import * as a from "../../constant";
import { toast } from "react-toastify";

const initialState = {
  currentAdmin: "",
};

export default function LoginAdmin(state = initialState, action) {
  switch (action.type) {
    case a.LOGIN_ADMIN:
      return { ...state, currentAdmin: action.payload };
    case a.LOGIN_USER:
      return { ...state, currentAdmin: action.payload };
    case a.LOGOUT_ADMIN:
      return { ...state, currentAdmin: null };

    default:
      return state;
  }
}
