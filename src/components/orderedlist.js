import React from 'react';

const OrderedList = ({ children: { children } }) => (
  <ol className="ml-4 list-decimal space-y-10">
    {children.map((item) => (
      <li className="ml-4 ">{item.props.children}</li>
    ))}
  </ol>
);

export default OrderedList;
