/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ClipboardIcon, ShareIcon } from '@heroicons/react/solid';

import { TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Dropdown = ({ slug, title, summary }) => (
  <Menu as="div" className="relative inline-block text-left">
    {({ open }) => (
      <>
        <div>
          <Menu.Button className="bg-primary rounded-full flex items-center text-gray-400 dark:text-coolGray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-coolGray-900 focus:ring-emerald-500">
            <span className="sr-only">Open options</span>
            <ShareIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            static
            className="z-10 p-1 origin-top-right absolute right-0 mt-2 w-56 shadow-lg rounded-md bg-primary border border-primary ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <TwitterShareButton
                    className="w-full"
                    url={slug}
                    title={title}
                    via="BraydonCoyer"
                  >
                    <div
                      className={classNames(
                        active
                          ? 'rounded bg-secondary text-secondary'
                          : 'text-secondary',
                        'group flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      <FaTwitterSquare
                        className="mr-3 h-5 w-5 text-secondary group-hover:text-emerald"
                        aria-hidden="true"
                      />
                      Twitter
                    </div>
                  </TwitterShareButton>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <LinkedinShareButton
                    className="w-full"
                    title={title}
                    summary={summary}
                    source={slug}
                    url={slug}
                  >
                    <div
                      className={classNames(
                        active
                          ? 'rounded bg-secondary text-secondary'
                          : 'text-secondary',
                        'group flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      <FaLinkedin
                        className="mr-3 h-5 w-5 text-secondary group-hover:text-emerald"
                        aria-hidden="true"
                      />
                      Linkedin
                    </div>
                  </LinkedinShareButton>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <CopyToClipboard text={slug}>
                    <button
                      type="button"
                      className={classNames(
                        active
                          ? 'cursor-pointer rounded bg-secondary text-secondary'
                          : 'text-secondary',
                        'group flex items-center px-4 py-2 text-sm w-full'
                      )}
                    >
                      <ClipboardIcon
                        className="mr-3 h-5 w-5 text-secondary group-hover:text-emerald"
                        aria-hidden="true"
                      />
                      Copy URL
                    </button>
                  </CopyToClipboard>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </>
    )}
  </Menu>
);

export default Dropdown;
