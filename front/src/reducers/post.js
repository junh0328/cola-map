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
};

export const GET_STORE_REQUEST = 'GET_STORE_REQUEST';
export const GET_STORE_SUCCESS = 'GET_STORE_SUCCESS';
export const GET_STORE_FAILURE = 'GET_STORE_FAILURE';

export const POST_STORE_REQUEST = 'POST_STORE_REQUEST';
export const POST_STORE_SUCCESS = 'POST_STORE_SUCCESS';
export const POST_STORE_FAILURE = 'POST_STORE_FAILURE';

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
        draft.data = action.data;
        break;
      }
      case POST_STORE_FAILURE: {
        draft.postStoreLoading = false;
        draft.postStoreError = action.error;
        break;
      }
      default:
        return state;
    }
  });

export default post;
