import { combineReducers } from 'redux';
import {headerReducer} from './headerReducer';
import {mainReducer} from './mainReducer';
import {footerReducer} from './footerReducer';

export const rootReducer = combineReducers({
   headerReducer,
   mainReducer,
   footerReducer
});