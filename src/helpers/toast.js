/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import LimeadeToast from '../assets/limeadeToast.png';

const ToastItem = () => {
  const [toastState, setToastState] = useState('enter');

  const handleToastClick = () => {
    setToastState('leaving');
    setTimeout(() => {
      setToastState('enter');
    }, 2000);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={handleToastClick}
      className={`${
        toastState === 'enter' ? '' : 'translate-x-6 opacity-0'
      } transform ease-out duration-300 cursor-pointer`}
    >
      <img src={LimeadeToast} alt="toast notification" />
    </div>
  );
};

export default ToastItem;
