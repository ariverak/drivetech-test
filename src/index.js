import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from 'store';
import AppTheme from "theme";
import * as serviceWorker from './serviceWorker';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <Home />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
