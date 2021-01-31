import * as actions from './actiontypes';

export const addusers = (data) => {
  return {
    type: actions.ADD_USERS,
    payload: data,
  };
};
