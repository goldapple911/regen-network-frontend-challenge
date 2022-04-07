import React from 'react';

import './style.scss';

export interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => {
  return <div className="App-wrapper vh-100 d-flex justify-content-center">{children}</div>;
};

export default Layout;
