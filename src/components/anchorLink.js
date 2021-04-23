import React from 'react';
import { LinkIcon } from '@heroicons/react/solid';
import { formatHashLink } from '~helpers/formatHashLink';

function AnchorLink({ children }) {
  return (
    <div className="group relative flex items-start">
      <div className="opacity-0 group-hover:opacity-50 pt-2 absolute left-[-30px]">
        <a id={formatHashLink(children)} href={`#${formatHashLink(children)}`}>
          <LinkIcon className="w-5 h-5 hidden md:block" />
        </a>
      </div>
      {children}
    </div>
  );
}

export { AnchorLink };
