import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from '../helpers/themeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-4">
      {theme === 'dark' ? (
        <HiSun
          onClick={handleClick}
          className="text-coolGray-500 dark:text-coolGray-400 text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={handleClick}
          className="text-coolGray-500 dark:text-coolGray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
