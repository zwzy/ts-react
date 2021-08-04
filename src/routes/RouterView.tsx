import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IRoute, IUserInfo } from '../utils/type';

export default function RouterView({
  routes: [],
  userInfo,
}: {
  routes: IRoute[],
  userInfo: IUserInfo
}) {
  return (
  <Switch>
    {
      routes.map((route: IRoute) =>
        <Route
        path={route.path}
        render={props => (
          <>
            <Helmet>
              <title>{route.name}</title>
            </Helmet>
            <route.component
              {...props}
              routes={mapRoutes || []}
              userRoles={route.userRoles}
              userInfo={route.userInfo}
            />
          </>
        )}
        />
      })
    }
  </Switch>
  );
}
