import React from 'react';
import { Provider } from 'react-redux';
import { configStore } from '../../base/store';
import { Global } from './styles';

const store = configStore();

const App: React.FC = () => (
  <Provider store={store}>
    <Global />
  </Provider>
);

export default App;
