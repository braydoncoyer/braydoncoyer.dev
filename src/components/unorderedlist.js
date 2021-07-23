import React from 'react';

const UnorderedList = ({ children }) => (
  <ul className="ml-2">
    {children.map((item) => (
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[18px] w-[18px] mb-0.5 text-emerald"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <li className="ml-4">{item}</li>
      </div>
    ))}
  </ul>
);

export default UnorderedList;
