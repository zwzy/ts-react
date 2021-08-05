import Layout from '../layout';
import Login from '../pages/Login';
import { IRoute } from '../utils/type';

export default [
  {
    name: '欢迎登录',
    path: '/login',
    component: Login,
  },
  {
    name: '小左博客',
    path: '/',
    component: Layout,
  },
] as IRoute[];
