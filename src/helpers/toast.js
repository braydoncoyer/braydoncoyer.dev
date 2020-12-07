/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

const ToastItem = ({ title, description, color, icon }) => {
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
      } transform ease-out duration-300 cursor-pointer w-full`}
    >
      {/* <img src={LimeadeToast} alt="toast notification" /> */}
      <div className={`w-full bg-${color}-400 rounded-xl p-2`}>
        <div className="w-full bg-white rounded-md px-4 py-2 flex items-center">
          <div className={`text-${color}-400 text-5xl`}>
            {icon === 'question' ? <HiCheckCircle /> : <HiExclamationCircle />}
          </div>
          <div>
            <p className="ml-4 text-coolGray-900 font-semibold text-md tracking-tighter">
              {title}
            </p>
            <p className="ml-4 text-coolGray-400 font-semibold text-md tracking-tighter">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastItem;
