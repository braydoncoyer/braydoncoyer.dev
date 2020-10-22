import React from 'react';

import { ThemeProvider } from '../helpers/themeContext';
import { Toggle } from './toggle';

const Layout = ({ children }) => (
  <ThemeProvider>
    <main>
      <Toggle />
      {children}
    </main>
  </ThemeProvider>
);

export default Layout;
