import produce from 'immer';

export const initialState = {
  data: null,
  storeData: [],
  categoryData: [],

  getStoreLoading: false,
  getStoreSuccess: false,
  getStoreError: null,

  postStoreLoading: false,
  postStoreSuccess: false,
  postStoreError: null,

  deletePostLoading: false,
  deletePostSuccess: false,
  deletePostError: null,

  updatePostLoading: false,
  updatePostSuccess: false,
  updatePostError: null,

  getCategoryLoading: false,
  getCategorySuccess: false,
  getCategoryError: null,
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

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAILURE = 'GET_CATEGORY_FAILURE';

export const RESET_CATEGORY_LIST = 'RESET_CATEGORY_LIST';

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
      case UPDATE_POST_REQUEST: {
        draft.updatePostLoading = true;
        draft.updatePostSuccess = false;
        break;
      }
      case UPDATE_POST_SUCCESS: {
        draft.updatePostLoading = false;
        draft.updatePostSuccess = true;
        draft.storeData.find((v) => v._id === action.data.postId).comment = action.data.comment;

        break;
      }
      case UPDATE_POST_FAILURE: {
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;
      }
      case RESET_CATEGORY_LIST: {
        draft.categoryData = [];
      }
      case GET_CATEGORY_REQUEST: {
        draft.getCategoryLoading = true;
        draft.getCategorySuccess = false;
        break;
      }
      case GET_CATEGORY_SUCCESS: {
        draft.getCategoryLoading = false;
        draft.getCategorySuccess = true;
        draft.categoryData = draft.categoryData.concat(action.data);
        break;
      }
      case GET_CATEGORY_FAILURE: {
        draft.getCategoryLoading = false;
        draft.getCategoryError = action.error;
        break;
      }
      default:
        return state;
    }
  });

export default post;
