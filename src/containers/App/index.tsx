import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { configStore } from '../../base/store';
import Details from '../Users/containers/Details';
import List from '../Users/containers/List';
import Login from '../Login';

import { Global } from './styles';

const store = configStore();

const App: React.FC = () => (
  <Provider store={store}>
    <Global />
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/users'>
          <List />
        </Route>
        <Route path='/user/:id'>
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
