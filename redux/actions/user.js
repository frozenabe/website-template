import * as types from './types';

export const changeUserInfo = userInfo => ({
  type: types.CHANGE_USER_INFO,
  payload: userInfo,
});

export const DUMMY = 'DUMMY';
