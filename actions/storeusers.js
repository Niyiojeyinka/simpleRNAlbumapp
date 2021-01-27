import * as actions from '../constants';

export const addusers = (data) => {
  return {
    type: actions.ADD_USERS,
    payload: data,
  };
};
