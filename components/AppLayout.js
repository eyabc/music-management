import React from 'react';
import Header from './Header';

const AppLayout = ({ children }) => (
  <>
      <Header>
          header
      </Header>
      <hr/>
      { children }
      <hr/>
  </>
);

export default AppLayout;