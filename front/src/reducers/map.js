import produce from 'immer';
// import FetchingMap from '../apis/FetchingMap';

export const initialState = {
  fetchMapLoading: false,
  fetchMapDone: false,
  fetchMapError: null,
};

export const FETCH_MAP_REQUEST = 'FETCH_MAP_REQUEST';
export const FETCH_MAP_SUCCESS = 'FETCH_MAP_SUCCESS';
export const FETCH_MAP_FAILURE = 'FETCH_MAP_FAILURE';

const map = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_MAP_REQUEST: {
        draft.fetchMapLoading = true;
        draft.fetchMapDone = false;
        break;
      }
      case FETCH_MAP_SUCCESS: {
        draft.fetchMapLoading = false;
        draft.fetchMapDone = true;
        break;
      }
      case FETCH_MAP_FAILURE: {
        draft.fetchMapLoading = false;
        draft.fetchMapError = action.error;
        break;
      }
      default:
        return state;
    }
  });

export default map;
