import produce from 'immer';

export const initialState = {
  data: null,
  storeData: [],

  getStoreLoading: false,
  getStoreSuccess: false,
  getStoreError: null,

  postStoreLoading: false,
  postStoreSuccess: false,
  postStoreError: null,

  deletePostLoading: false,
  deletePostSuccess: false,
  deletePostError: null,
};

export const GET_STORE_REQUEST = 'GET_STORE_REQUEST';
export const GET_STORE_SUCCESS = 'GET_STORE_SUCCESS';
export const GET_STORE_FAILURE = 'GET_STORE_FAILURE';

export const POST_STORE_REQUEST = 'POST_STORE_REQUEST';
export const POST_STORE_SUCCESS = 'POST_STORE_SUCCESS';
export const POST_STORE_FAILURE = 'POST_STORE_FAILURE';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

const post = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_STORE_REQUEST: {
        draft.getStoreLoading = true;
        draft.getStoreSuccess = false;
        break;
      }
      case GET_STORE_SUCCESS: {
        draft.getStoreLoading = false;
        draft.getStoreSuccess = true;
        draft.storeData = draft.storeData.concat(action.data);
        break;
      }
      case GET_STORE_FAILURE: {
        draft.getStoreLoading = false;
        draft.getStoreError = action.error;
        break;
      }
      case POST_STORE_REQUEST: {
        draft.postStoreLoading = true;
        draft.postStoreSuccess = false;
        break;
      }
      case POST_STORE_SUCCESS: {
        draft.postStoreLoading = false;
        draft.postStoreSuccess = true;
        draft.storeData = draft.storeData.concat(action.data);
        break;
      }
      case POST_STORE_FAILURE: {
        draft.postStoreLoading = false;
        draft.postStoreError = action.error;
        break;
      }
      case DELETE_POST_REQUEST: {
        draft.deletePostLoading = true;
        draft.deletePostSuccess = false;
        break;
      }
      case DELETE_POST_SUCCESS: {
        draft.deletePostLoading = false;
        draft.deletePostSuccess = true;
        draft.storeData = draft.storeData.filter((v) => v._id !== action.data);
        // action.data 에는 610bce26764ea20f617a3b24 가 들어있음
        break;
      }
      case DELETE_POST_FAILURE: {
        draft.deletePostLoading = false;
        draft.deletePostError = action.error;
        break;
      }
      default:
        return state;
    }
  });

export default post;
