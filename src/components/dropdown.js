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
          <Menu.Button className="bg-white dark:bg-coolGray-900 rounded-full flex items-center text-gray-400 dark:text-coolGray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-coolGray-900 focus:ring-emerald-500">
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
            className="z-10 p-1 origin-top-right absolute right-0 mt-2 w-56 shadow-lg rounded-md bg-white dark:bg-coolGray-900 border border-coolGray-200 ring-1 ring-black dark:border-coolGray-700 ring-opacity-5 focus:outline-none"
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
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? 'rounded bg-coolGray-100 text-coolGray-700 dark:bg-coolGray-800 dark:text-coolGray-200'
                          : 'text-coolGray-600 dark:text-coolGray-400',
                        'group flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      <FaTwitterSquare
                        className="mr-3 h-5 w-5 text-coolGray-600 group-hover:text-emerald-500 dark:text-gray-400 dark:group-hover:text-emerald-400"
                        aria-hidden="true"
                      />
                      Twitter
                    </a>
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
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? 'rounded bg-coolGray-100 text-coolGray-700 dark:bg-coolGray-800 dark:text-coolGray-200'
                          : 'text-coolGray-600 dark:text-coolGray-400',
                        'group flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      <FaLinkedin
                        className="mr-3 h-5 w-5 text-coolGray-600 group-hover:text-emerald-500 dark:text-gray-400 dark:group-hover:text-emerald-400"
                        aria-hidden="true"
                      />
                      Linkedin
                    </a>
                  </LinkedinShareButton>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <CopyToClipboard text={slug}>
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? 'rounded bg-coolGray-100 text-coolGray-700 dark:bg-coolGray-800 dark:text-coolGray-200'
                          : 'text-coolGray-600 dark:text-coolGray-400',
                        'group flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      <ClipboardIcon
                        className="mr-3 h-5 w-5 text-coolGray-600 group-hover:text-emerald-500 dark:text-gray-400 dark:group-hover:text-emerald-400"
                        aria-hidden="true"
                      />
                      Copy URL
                    </a>
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
