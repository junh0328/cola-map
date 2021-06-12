import produce from 'immer';
// import FetchingMap from '../apis/FetchingMap';
export const initialState = {
  // map에 대한 상태 관리를 할 객체, maskMap
  colaMap: null,
  address: {},
  fetchMapLoading: false,
  fetchMapDone: false,
  fetchMapError: null,
};
export const RESET_MAP_STATE = 'RESET_MAP_STATE';
export const FETCH_MAP_REQUEST = 'FETCH_MAP_REQUEST';
export const FETCH_MAP_SUCCESS = 'FETCH_MAP_SUCCESS';
export const FETCH_MAP_FAILURE = 'FETCH_MAP_FAILURE';

export const FETCH_ADDRESS_REQUEST = 'FETCH_ADDRESS_REQUEST';
export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS';
export const FETCH_ADDRESS_FAILURE = 'FETCH_ADDRESS_FAILURE';

export const fetchMap = () => {
  return {
    type: FETCH_MAP_REQUEST,
  };
};

export const fetchAddress = (result, status) => {
  return {
    type: FETCH_ADDRESS_REQUEST,
    result,
    status,
  };
};

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
        draft.colaMap = action.map;
        break;
      }
      case FETCH_MAP_FAILURE: {
        draft.fetchMapLoading = false;
        draft.fetchMapError = action.error;
        break;
      }
      case FETCH_ADDRESS_SUCCESS: {
        draft.address = { result: action.result, status: action.status };
        break;
      }
      case FETCH_ADDRESS_FAILURE: {
        draft.address = { status: action.status };
        break;
      }
      default:
        return state;
    }
  });
export default map;
