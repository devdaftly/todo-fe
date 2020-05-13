import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import buildFontAwesomeLibrary from './fa-library';
import configureStore from './store';

import App from './App';
import './index.scss';

const store = configureStore();
buildFontAwesomeLibrary();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById('root'));
