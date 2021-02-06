import { Action, applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppState } from '../types';
import { rootReducer } from '../reducers';
import { initialUserState } from '../../containers/Users/reducers';
import { initialLoginState } from '../../containers/Login/reducers';

const initState: AppState = {
  users: initialUserState,
  login: initialLoginState,
};

export const configStore = (
  initialState: AppState = initState
): Store<AppState, Action> => ({
  ...createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  ),
});
