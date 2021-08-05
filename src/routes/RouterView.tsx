import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IUserInfo, { IRoute } from '../utils/type';

interface IRouterView {
  routes: IRoute[]
  userInfo?: IUserInfo
}
function RouterView({
  routes = [],
  userInfo = {
    id: '',
    name: '',
  },
}: IRouterView) {
  return (
    <Switch>
      {routes.map((item: IRoute) => (
        <Route
          key={item.path}
          path={item.path}
          render={(props: any) => (
            <item.component
              // const props = { history, match, location };
              // Route 本身的props history location 等路由信息
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
              routes={item.routes}
              userInfo={userInfo}
            />
          )}
        />
      ))}
    </Switch>
  );
}
export default RouterView;
