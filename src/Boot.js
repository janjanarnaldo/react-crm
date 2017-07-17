import React from 'react';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Contacts from './containers/Contacts';

import './Boot.css';

// App will act as boot component
const Boot = () => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}></IndexRoute>
        <Route path="/contacts" component={Contacts}></Route>
      </Route>
    </Router>
  );
}

export default Boot;
