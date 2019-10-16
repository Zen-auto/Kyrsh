import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import GoodstoreService from './services/goodstore-service';
import { GoodstoreServiceProvider } from './components/goodstore-service-context';

import store from './store';

const goodstoreService = new GoodstoreService();


ReactDOM.render(
  <Provider store={ store }>
    <ErrorBoundry>
      <GoodstoreServiceProvider value={ goodstoreService }>
        <Router>
          <App />
        </Router>
      </GoodstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);


