import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Login = ({ history }: RouteComponentProps) => {
  const toBackPage = () => {
    history.push('/');
  };
  useEffect(() => {
    toBackPage();
  }, []);
  return (
    <div>
      Login
    </div>
  );
};

export default Login;
