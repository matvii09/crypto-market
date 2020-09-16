import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

import ROUTES from 'Constants/Routes';
import AppModule from 'Modules/App/AppModule';
import { AppProvider } from './context/AppProvider';
import './App.scss';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path={ROUTES.APP} component={AppModule} />
          <Redirect from={ROUTES.ROOT} to={ROUTES.APP} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
