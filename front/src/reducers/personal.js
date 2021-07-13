import produce from 'immer';

export const initialState = {
  me: '',

  loginLoading: false,
  loginDone: false,
  loginError: null,
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_DONE = 'LOGIN_DONE';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const personal = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST: {
        draft.loginLoading = true;
        draft.loginDone = false;
        break;
      }
      case LOGIN_DONE: {
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.me = action.data;
        break;
      }
      case LOGIN_FAILURE: {
        draft.loginLoading = false;
        draft.loginError = action.error;
      }
      default:
        return state;
    }
  });

export default personal;
