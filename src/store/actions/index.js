// CTRL + SHIFT + F
// action adalah sebuah object yang memiliki property "type"

import axios from "../../utils/axios";

export const loginAction = (loginData) => {
  // loginAction akan return function, functionnya akan masuk ke middleware
  // function ini kemudian akan dijalankan oleh middleware
  return async (dispatch) => {
    try {
      const res = await axios.get("/users", {
        params: { username: loginData.username, password: loginData.password },
      });

      if (res.data.length) {
        const { id, username, role } = res.data[0];
        // menyimpan data di local storage
        localStorage.setItem(
          "userData",
          JSON.stringify({ id, username, role })
        );
        // mengirim data kembali ke middleware (thunk) , baru kemudian di teruskan ke reducer
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { id, username, role },
        });
      } else {
        alert("Username or Password is incorrect");
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const keepLoginAction = ({ id, username, role }) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: { id, username, role },
  };
};

export const logoutAction = () => {
  localStorage.removeItem("userData");
  return {
    type: "LOGOUT_SUCCESS",
  };
};
