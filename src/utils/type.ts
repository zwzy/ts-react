import { ReactElement } from 'react';

export interface IRoute {
  name: string,
  path: string,
  component: () => ReactElement,

  roles?: string[],
  exact?: boolean,
  routes?: IRoute[],
}
export interface IUserInfo {
  name: string,
  id: string,
}
export default IUserInfo;
