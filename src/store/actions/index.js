export const loginAction = ({ id, username, role, dispatch }) => {
  // menyimpan data di local storage
  localStorage.setItem("userData", JSON.stringify({ id, username, role }));
  // mengirim data ke reducer untuk kemudian disimpan di state
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: { id, username, role },
  });
};

export const keepLogin = ({ id, username, role, dispatch }) => {
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: { id, username, role },
  });
};

export const logoutAction = (dispatch) => {
  localStorage.removeItem("userData");
  dispatch({
    type: "LOGOUT_SUCCESS",
  });
};
