import { combineReducers } from "redux";

import authReducer from "./authReducer";

export default combineReducers({
  // stateNasabah: Nasabah,
  // stateKeuangan: Keuangan,
  auth: authReducer,
});
