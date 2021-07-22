import produce from 'immer';

export const initialState = {
  me: null,

  myInfo: null,

  checkUserLoading: false,
  checkUserSuccess: false,
  checkUserError: null,

  loadInfoLoading: false,
  loadInfoSuccess: false,
  loadInfoError: null,

  logOutLoading: false,
  logOutSuccess: false,
  logOutError: null,
};

export const CHECK_USER_REQUEST = 'CHECK_USER_REQUEST';
export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS';
export const CHECK_USER_FAILURE = 'CHECK_USER_FAILURE';

export const LOAD_INFO_REQUEST = 'LOAD_INFO_REQUEST';
export const LOAD_INFO_SUCCESS = 'LOAD_INFO_SUCCESS';
export const LOAD_INFO_FAILURE = 'LOAD_INFO_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

const personal = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHECK_USER_REQUEST: {
        draft.checkUserLoading = true;
        draft.checkUserSuccess = false;
        break;
      }
      case CHECK_USER_SUCCESS: {
        draft.checkUserLoading = false;
        draft.checkUserSuccess = true;
        draft.me = action.data;
        break;
      }
      case CHECK_USER_FAILURE: {
        draft.checkUserLoading = false;
        draft.checkUserError = action.error;
      }
      case LOAD_INFO_REQUEST: {
        draft.loadInfoLoading = true;
        draft.loadInfoSuccess = false;
        break;
      }
      case LOAD_INFO_SUCCESS: {
        draft.loadInfoLoading = false;
        draft.loadInfoSuccess = true;
        draft.myInfo = action.data;
        break;
      }
      case LOAD_INFO_FAILURE: {
        draft.loadInfoLoading = false;
        draft.loadInfoError = action.error;
      }
      case LOG_OUT_REQUEST: {
        draft.logOutLoading = true;
        draft.logOutSuccess = false;
        break;
      }
      case LOG_OUT_SUCCESS: {
        draft.logOutLoading = false;
        draft.logOutSuccess = true;
        draft.myInfo = null;
        break;
      }
      case LOG_OUT_FAILURE: {
        draft.logOutLoading = false;
        draft.logOutError = action.error;
      }
      default:
        return state;
    }
  });

export default personal;
