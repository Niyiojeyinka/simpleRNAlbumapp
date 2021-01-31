import * as actions from '../actions/actiontypes';

let initialState = {albums: []};
export const album = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ALBUMS:
      return {albums: [...action.payload]};
    case actions.FILTER_ALBUM_USER:
      let myproducts = state.albums.filter((product) => {
        return product.id !== action.payload.id;
      });
      return {
        products: [...myproducts],
      };
    default:
      return state;
  }
};
