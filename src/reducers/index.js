import { combineReducers } from 'redux';

import apiReducer from './actions/fetchFromAPI';

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;
