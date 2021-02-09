import { combineReducers } from 'redux';
import { loginReducer } from '../../containers/Login/reducers';
import { usersReducer } from '../../containers/Users/reducers';

export const rootReducer = combineReducers({
  users: usersReducer,
  login: loginReducer,
});
