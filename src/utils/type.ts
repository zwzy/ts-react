import { ComponentProps, ComponentType, ReactHTMLElement } from "react";

export interface IRoute {
  name: string,
  path: string,
  roles: string[],
  exact?: boolean,
  routes?: IRoute[],
  component: any
}
export interface IUserInfo {
  name: string,
  id: string,
}
