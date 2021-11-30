// CTRL + SHIFT + F
// action adalah sebuah object yang memiliki property "type"

export const loginAction = ({ id, username, role }) => {
  // menyimpan data di local storage
  localStorage.setItem("userData", JSON.stringify({ id, username, role }));
  // mengirim data ke reducer untuk kemudian disimpan di state
  return {
    type: "LOGIN_SUCCESS",
    payload: { id, username, role },
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
