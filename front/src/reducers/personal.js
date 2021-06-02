import produce from 'immer';

export const initialState = {
  isPersonalOption: false,
};

export const PERSONAL_OPTION_TOGGLE = 'PERSONAL_OPTION_TOGGLE';

export const togglePersonalOption = () => {
  return {
    type: PERSONAL_OPTION_TOGGLE,
  };
};

const personal = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PERSONAL_OPTION_TOGGLE: {
        draft.isPersonalOption = !state.isPersonalOption;
        break;
      }
      default:
        return state;
    }
  });

export default personal;
