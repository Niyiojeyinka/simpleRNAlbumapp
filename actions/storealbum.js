import * as actions from '../constants';

const storealbum = (data) => {
  return {
    type: actions.ADD_ALBUMS,
    payload: data,
  };
};
