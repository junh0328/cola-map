import produce from 'immer';

export const initialState = {
  // map에 대한 상태 관리를 할 객체, maskMap
  colaMap: null,
  userAddress: {},
  fetchMapLoading: false,
  fetchMapDone: false,
  fetchMapError: null,
  getLocationLoading: false,
  getLocationDone: false,
  getLocationError: null,
};
export const RESET_MAP_STATE = 'RESET_MAP_STATE';
export const FETCH_MAP_REQUEST = 'FETCH_MAP_REQUEST';
export const FETCH_MAP_SUCCESS = 'FETCH_MAP_SUCCESS';
export const FETCH_MAP_FAILURE = 'FETCH_MAP_FAILURE';

export const GET_LOCATION_REQUEST = 'GET_LOCATION_REQUEST';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';

export const SET_ADDRESS_REQEUST = 'SET_ADDRESS_REQEUST';
export const SET_ADDRESS_SUCCESS = 'SET_ADDRESS_SUCCESS';
export const SET_ADDRESS_FAILURE = 'SET_ADDRESS_FAILURE';

export const fetchMap = () => {
  return {
    type: FETCH_MAP_REQUEST,
  };
};

export const getLocation = () => {
  return {
    type: GET_LOCATION_REQUEST,
  };
};

export const setAddress = (address, status) => {
  return {
    type: SET_ADDRESS_REQEUST,
    address,
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
      case GET_LOCATION_REQUEST: {
        draft.getLocationLoading = true;
        draft.getLocationDone = false;
        break;
      }
      case GET_LOCATION_SUCCESS: {
        draft.getLocationLoading = false;
        draft.getLocationDone = true;
        draft.colaMap = action.map;
        break;
      }
      case GET_LOCATION_FAILURE: {
        draft.getLocationLoading = false;
        draft.getLocationError = action.error;
        break;
      }
      case SET_ADDRESS_SUCCESS: {
        draft.userAddress = { address: action.address, status: action.status };
        break;
      }
      case SET_ADDRESS_FAILURE: {
        break;
      }
      default:
        return state;
    }
  });
export default map;
