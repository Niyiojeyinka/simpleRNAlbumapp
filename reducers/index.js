import {combineReducers} from 'redux';
import {album} from './albumstore';
import {users} from './usersstore';

const allReducers = combineReducers({
  album,
  users,
});
//using es6 objects feature
export default allReducers;
