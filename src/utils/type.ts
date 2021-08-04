export interface IRoute {
  name: string,
  path: string,
  roles: string[],
  exact?: boolean,
  component: Element
}
export interface IUserInfo {
  name: string,
  id: string,
}
