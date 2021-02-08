/* eslint-disable react/display-name */
import { MDXProvider } from '@mdx-js/react';
import React from 'react';

const components = {
  h3: ({ children }) => (
    <h3 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl lg:text-2xl font-extrabold text-coolGray-900 dark:text-white mb-4">
      {children}
    </h4>
  ),
  //   'p.inlineCode': (props) => (
  //     <code style={{ backgroundColor: 'red' }} {...props} />
  //   ),
};
const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export { wrapRootElement };
