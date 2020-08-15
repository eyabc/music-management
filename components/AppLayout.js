import React from 'react';
import Link from 'next/link';

const AppLayout = ({ children }) => (
  <>
      <header>
          header
      </header>
      { children }
      <footer>
          footer
      </footer>
  </>
);

export default AppLayout;