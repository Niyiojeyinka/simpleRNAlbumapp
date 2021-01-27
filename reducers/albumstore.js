import * as actions from '../constants';

let initialState = {albums: []};
export const album = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ALBUMS:
      return {albums: action.payload};

    default:
      return state;
  }
};
