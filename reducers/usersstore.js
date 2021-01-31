import * as actions from '../actions/actiontypes';

let initialState = {users: []};
export const users = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_USERS:
      return {users: [...action.payload]};
    default:
      return state;
  }
};
