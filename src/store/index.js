import { combineReducers, createStore } from "redux";

const init = {
  id: 0,
  username: "",
  role: "",
  berhasil: "Hore",
};

// apa yang di return reducer akan disimpan ke state
// reducer tidak boleh me-return undefiend
// saat pertama kali running, state akan berisi undefiend, karena tidak boleh me return undefiend maka diberi default value
const authReducer = (state = init, action) => {
  /*
    {
      type: "LOGIN_SUCCESS",
      payload: {id: 9, username: "rochafi", role: "user"}
    }
  */
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        id: action.payload.id,
        username: action.payload.username,
        role: action.payload.role,
      };
      break;

    default:
      // Mulangin data
      return state;
  }
};

const reducers = combineReducers({
  // stateNasabah: Nasabah,
  // stateKeuangan: Keuangan,
  auth: authReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
