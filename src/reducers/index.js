import { combineReducers } from 'redux';

import apiReducer from './actions/apiReducer';
import uiReducer from './actions/uiReducer';

const rootReducer = combineReducers({
  api: apiReducer,
  ui: uiReducer,
});

export default rootReducer;
