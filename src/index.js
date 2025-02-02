import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import Navbar from './components/navbar';
// import Homepage from './components/homepage';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import reducers from './reducers';
import App from './components/app'

import { AUTHENTICATED } from './actions';
import requireAuth from './components/hoc/require-auth';
import noRequireAuth from './components/hoc/no-require-auth';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');

if (user) {
  store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={App} />
        <Route path="/signin" component={noRequireAuth(Signin)} />
        <Route path="/signup" component={noRequireAuth(Signup)} />
        <Route path="/secret" component={requireAuth(App)} />
        <Route path="/signout" component={requireAuth(Signout)} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
