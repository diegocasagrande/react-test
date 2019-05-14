import { combineReducers } from 'redux';

import courses from './courses';
import login from './login';

export default combineReducers({
  courses,
  login,
});
