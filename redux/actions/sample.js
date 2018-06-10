/* eslint import/prefer-default-export: 0 */

import * as types from './types';

export const changeSample = sample => ({
  type: types.CHANGE_SAMPLE,
  payload: sample,
});
