/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

const ToastItem = ({ title, description, icon, type }) => {
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
        toastState === 'enter' ? 'cursor-pointer' : 'translate-x-6 opacity-0'
      } transform ease-out duration-300 w-full`}
    >
      <div
        className={`w-full rounded-xl p-2 ${
          type === 'success' ? 'bg-emerald-400' : 'bg-lightBlue-400'
        }`}
      >
        <div className="w-full bg-white rounded-md px-4 py-2 flex items-center">
          <div
            className={`text-5xl ${
              type === 'success' ? 'text-emerald-400' : 'text-lightBlue-400'
            }`}
          >
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
