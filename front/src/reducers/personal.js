import produce from 'immer';

export const initialState = {
  // 유저 정보 체크
  me: null,

  // 유저 정보 가져오기
  myInfo: null,

  // 내 정보에 내가 제보한 리뷰 불러오기
  myPosts: [],

  checkUserLoading: false,
  checkUserSuccess: false,
  checkUserError: null,

  loadInfoLoading: false,
  loadInfoSuccess: false,
  loadInfoError: null,

  logOutLoading: false,
  logOutSuccess: false,
  logOutError: null,

  loadMyPostsLoading: false,
  loadMyPostsSuccess: false,
  loadMyPostsError: null,
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

export const LOAD_MY_POSTS_REQUEST = 'LOAD_MY_POSTS_REQUEST';
export const LOAD_MY_POSTS_SUCCESS = 'LOAD_MY_POSTS_SUCCESS';
export const LOAD_MY_POSTS_FAILURE = 'LOAD_MY_POSTS_FAILURE';

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
      case LOAD_MY_POSTS_REQUEST: {
        draft.loadMyPostsLoading = true;
        draft.loadMyPostsSuccess = false;
        break;
      }
      case LOAD_MY_POSTS_SUCCESS: {
        draft.loadMyPostsLoading = false;
        draft.loadMyPostsSuccess = true;
        draft.myPosts = draft.myPosts.concat(action.data);
        break;
      }
      case LOAD_MY_POSTS_FAILURE: {
        draft.loadMyPostsLoading = false;
        draft.loadMyPostsError = action.error;
      }
      default:
        return state;
    }
  });

export default personal;
