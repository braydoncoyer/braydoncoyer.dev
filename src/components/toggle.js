import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from '../helpers/themeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md p-2 bg-coolGray-100 dark:bg-blueGray-800 "
    >
      {theme === 'dark' ? (
        <HiSun className="text-coolGray-500 dark:text-coolGray-400 text-2xl cursor-pointer" />
      ) : (
        <HiMoon className="text-coolGray-500 dark:text-coolGray-400 text-2xl cursor-pointer" />
      )}
    </button>
  );
};

export default Toggle;
