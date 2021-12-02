// CTRL + SHIFT + F
// action adalah sebuah object yang memiliki property "type"

import axios from "../../utils/axios";

export const loginAction = (loginData) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/users", {
        params: { username: loginData.username, password: loginData.password },
      });

      // toString()
      // 23 --> "23"

      // JSON.stringify()
      // {id, username, role} ---> "{id, username, role}"

      if (res.data.length) {
        // menyimpan data user yang login ke local storage
        const { id, username, role } = res.data[0];
        localStorage.setItem(
          "userData",
          JSON.stringify({ id, username, role })
        );

        // mengirim kembali ke middleware untuk kemudian di simpan ke redux state
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { id, username, role },
        });
      } else {
        alert("Username or password is incorrect");
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
