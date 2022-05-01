import { combineReducers } from "redux";
import listRoomReducer from "./RoomReducer";
import listBookRoomReducer from "./BookRoomReducer";
import LoginAdmin from "./loginAdminReducer";
import listUserReducer from "./UserReducers";
import HotelReducer from "./HotelReducer";
import listServiceReducer from "./ServiceReducer";
import BillReducer from "./BillReducer";

import chageState from "./showSideBar";

const rootReducer = combineReducers({
  bookroom: listBookRoomReducer,
  room: listRoomReducer,
  adminLogin: LoginAdmin,
  service: listServiceReducer,
  user: listUserReducer,
  hotel: HotelReducer,

  bill: BillReducer,
  change: chageState,
});

export default rootReducer;
