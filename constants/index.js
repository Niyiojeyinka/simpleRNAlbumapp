import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
export const API_BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const NUM_OF_COLS = 2;
export const TILE_SIZE = screenWidth / NUM_OF_COLS;
