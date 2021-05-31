import produce from 'immer';

export const initialState = {
  // map에 대한 상태 관리를 할 객체, maskMap
  colaMap: null,
<<<<<<< HEAD
  address: {},
=======

>>>>>>> c2c25517674f9e67df9cdd3ee8a8557617db761a
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

<<<<<<< HEAD
export const FETCH_ADDRESS_REQUEST = 'FETCH_ADDRESS_REQUEST';
export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS';
export const FETCH_ADDRESS_FAILURE = 'FETCH_ADDRESS_FAILURE';
=======
export const GET_LOCATION_REQUEST = 'GET_LOCATION_REQUEST';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';
>>>>>>> c2c25517674f9e67df9cdd3ee8a8557617db761a

export const fetchMap = () => {
  return {
    type: FETCH_MAP_REQUEST,
  };
};

<<<<<<< HEAD
export const fetchAddress = (result, status) => {
  return {
    type: FETCH_ADDRESS_REQUEST,
    result,
    status,
=======
export const getLocation = () => {
  return {
    type: GET_LOCATION_REQUEST,
>>>>>>> c2c25517674f9e67df9cdd3ee8a8557617db761a
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
<<<<<<< HEAD
      case FETCH_ADDRESS_SUCCESS: {
        draft.address = { result: action.result, status: action.status };
        break;
      }
      case FETCH_ADDRESS_FAILURE: {
        draft.address = { status: action.status };
=======
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
>>>>>>> c2c25517674f9e67df9cdd3ee8a8557617db761a
        break;
      }
      default:
        return state;
    }
  });

export default map;
