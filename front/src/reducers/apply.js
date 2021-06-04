import produce from 'immer';
// import FetchingMap from '../apis/FetchingMap';

export const initialState = {
  isApplyForm: false,
};

export const APPLYFORM_TOGGLE = 'APPLYFORM_TOGGLE';

export const toggleApplyForm = () => {
  return {
    type: APPLYFORM_TOGGLE,
  };
};

const apply = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case APPLYFORM_TOGGLE: {
        draft.isApplyForm = !state.isApplyForm;
        break;
      }
      default:
        return state;
    }
  });

export default apply;
