import { combineReducers } from "redux";

import authReducer from "./authReducer";
import timeReducer from "./timeReducer";

export default combineReducers({
  // stateNasabah: Nasabah,
  // stateKeuangan: Keuangan,
  auth: authReducer,
  time: timeReducer,
});
