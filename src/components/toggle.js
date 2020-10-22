import React from 'react';
import { ThemeContext } from '../helpers/themeContext';

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === 'dark';
  }

  return (
    <input
      type="checkbox"
      checked={isDark()}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  );
};
