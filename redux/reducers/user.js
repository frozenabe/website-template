import * as types from '../actions/types';

const initialState = {
  userInfo: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default user;
