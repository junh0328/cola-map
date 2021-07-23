import produce from 'immer';

export const initialState = {
  data: [],

  postStoreLoading: false,
  postStoreSuccess: false,
  postStoreError: null,
};

export const POST_STORE_REQUEST = 'POST_STORE_REQUEST';
export const POST_STORE_SUCCESS = 'POST_STORE_SUCCESS';
export const POST_STORE_FAILURE = 'POST_STORE_FAILURE';

const post = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case POST_STORE_REQUEST: {
        draft.postStoreLoading = true;
        draft.postStoreSuccess = false;
        break;
      }
      case POST_STORE_SUCCESS: {
        draft.postStoreLoading = false;
        draft.postStoreSuccess = true;
        draft.data = draft.data.concat(action.data);
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
