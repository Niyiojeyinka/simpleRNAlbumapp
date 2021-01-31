import * as actions from './actiontypes';

export const addalbum = (data) => {
  return {
    type: actions.ADD_ALBUMS,
    payload: data,
  };
};
