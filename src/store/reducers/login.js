const INITIAL_STATE = {
  payload: {
    user: '1',
    token: '1',
  },
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
}
