import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './desktop/lib/loading/index.js';

const Login = Loadable({
  loader: () => import('./desktop/page/login'),
  loading: Loading,
});

const Message = Loadable({
  loader: () => import('./desktop/page/message'),
  loading: Loading,
});

const NewMessage = Loadable({
  loader: () => import('./desktop/page/new-message'),
  loading: Loading,
});

const Logout = Loadable({
  loader: () => import('./desktop/page/logout'),
  loading: Loading,
});

class Middleware extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/message'} component={Message} />
          <Route exact path={'/new-message'} component={NewMessage} />
          <Route exact path={'/logout'} component={Logout} />
          <Route exact path={'/'} component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Middleware;
