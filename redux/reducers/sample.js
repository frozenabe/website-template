import * as types from '../actions/types';

const initialState = {
  sample: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_SAMPLE:
      return { ...state, sample: action.payload };
    default:
      return state;
  }
};

export default user;
