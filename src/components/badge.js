import React from 'react';

const Badge = ({ children }) => (
  <span
    className={`
        inline-flex 
        items-center
        px-2.5
        py-0.5
        rounded-md
        text-sm
        font-medium
        ${
          children.toLowerCase() === 'feature'
            ? 'bg-green-100 text-green-800'
            : ''
        }
        ${
          children.toLowerCase() === 'change'
            ? 'bg-yellow-100 text-yellow-800'
            : ''
        }
        ${
          children.toLowerCase() === 'bug fix'
            ? 'bg-blue-100 text-blue-800'
            : ''
        }
        ${
          children.toLowerCase() === 'seo'
            ? 'bg-purple-100 text-purple-800'
            : ''
        }
        ${children.toLowerCase() === 'bug' ? 'bg-red-100 text-red-800' : ''}
    `}
  >
    {children}
  </span>
);

export default Badge;
