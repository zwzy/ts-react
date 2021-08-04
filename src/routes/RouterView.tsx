import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IRoute, IUserInfo } from '../utils/type';

export default function RouterView({
  routes = [],
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
              <route.component
              // Route 本身的props history location 等路由信息
                {...props}
                routes={route.routes}
                userInfo={userInfo}
              />
            )}
          />
        )
      }
    </Switch>
  );
}
