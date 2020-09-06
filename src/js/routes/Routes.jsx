import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers';
import { MainLayout } from 'js/views/layout';
import { useDispatch } from 'react-redux';
import { getInfoCaracters } from '../core/Characters/action';
import Characters from 'js/views/Characters';

const Routers = (props) => {
  const dispatch = useDispatch();
  dispatch(getInfoCaracters());

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={`/dashboard`} />
      </Route>

      <PrivateRoute path="/dashboard/:path?" exact>
        <MainLayout>
          <Switch>
            <Route path="/dashboard" exact>
              <Characters />
            </Route>
          </Switch>
        </MainLayout>
      </PrivateRoute>
    </Switch>
  );
};

export default Routers;
