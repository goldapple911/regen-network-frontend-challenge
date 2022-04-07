import React from 'react';

import './style.scss';

export interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => {
  return <div className="App-wrapper">{children}</div>;
};

export default Layout;
