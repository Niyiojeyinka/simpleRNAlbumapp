import * as actions from '../constants';

export const addalbum = (data) => {
  return {
    type: actions.ADD_ALBUMS,
    payload: data,
  };
};
