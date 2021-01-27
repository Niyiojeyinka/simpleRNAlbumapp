import {combineReducers} from 'redux';
import {album} from './albumstore';

const allReducers = combineReducers({
  album,
});
//using es6 objects feature
export default allReducers;
