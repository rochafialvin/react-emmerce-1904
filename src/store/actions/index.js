export const loginAction = ({ id, username, role, dispatch }) => {
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: { id, username, role },
  });
};
