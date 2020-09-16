import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import ROUTES from 'Constants/Routes';
import {
  DashboardModule,
} from 'Modules/App';
import { Shell } from './Shell';


const AppModule: React.FC = () => {
  return (
    <Shell>
      <Switch>
        <Route path={ROUTES.DASHBOARD} component={DashboardModule} />
        <Redirect from={ROUTES.ROOT} to={ROUTES.DASHBOARD} />
      </Switch>
    </Shell>
  );
};

export default AppModule;
