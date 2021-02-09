/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { Code } from './src/components/code';

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
  'p.inlineCode': ({ children }) => (
    <code className="px-1 py-12 border border-coolGray-500 dark:border-coolGray-400 rounded-md bg-coolGray-100 dark:bg-blueGray-800">
      {children}
    </code>
  ),
  // pre: ({ children: { props } }) => {
  //   if (props.mdxType === 'code') {
  //     return (
  //       <Code
  //         codeString={props.children.trim()}
  //         language={props.className && props.className.replace('language-', '')}
  //         {...props}
  //       />
  //     );
  //   }
  // },
};
const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export { wrapRootElement };
