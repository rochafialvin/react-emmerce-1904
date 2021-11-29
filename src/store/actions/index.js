export const loginAction = ({ id, username, role, dispatch }) => {
  // menyimpan data di local storage
  localStorage.setItem("userData", JSON.stringify({ id, username, role }));
  // mengirim data ke reducer untuk kemudian disimpan di state
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: { id, username, role },
  });
};
