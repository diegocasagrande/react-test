export function loginSuccess(username, token) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      username,
      token,
    },
  };
}
