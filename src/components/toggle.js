import React from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

import { ThemeContext } from '../helpers/themeContext';

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleClick = () => {
    if (theme === 'dark') setTheme('light');
    if (theme === 'light') setTheme('dark');
  };

  return (
    <div>
      {theme === 'dark' ? (
        <BiSun
          onClick={handleClick}
          className="text-primary text-2xl cursor-pointer"
        />
      ) : (
        <BiMoon
          onClick={handleClick}
          className="text-primary text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};
