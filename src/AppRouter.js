import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import sets from 'app/setData';
import Gearsets from './views/Gearsets';
import DataExplorer from './views/DataExplorer';
import Diff from './views/Diff';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route
          path={sets[0].path}
          component={Gearsets}
          setData={sets[0].setData}
        />

        <Route
          path={sets[1].path}
          component={Gearsets}
          setData={sets[1].setData}
        />

        <Route
          path={sets[2].path}
          component={Gearsets}
          setData={sets[2].setData}
        />

        <Route
          path={sets[3].path}
          component={Gearsets}
          setData={sets[3].setData}
        />

        <Route path="/data" component={DataExplorer} />
        <Route path="/data/:itemHash" component={DataExplorer} />
        <Route path="/diff" component={Diff} />
      </Router>
    );
  }
}
