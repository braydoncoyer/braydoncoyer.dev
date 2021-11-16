import { Form, SubscribeSize } from '@/lib/types';

import { ErrorMessage } from './ErrorMessage';
import { LoadingSpinner } from './LoadingSpinner';
import { Subscribe } from './Subscribe';
import { SuccessMessage } from './SuccessMessage';
import siteMetadata from '@/data/siteMetadata';
import { useSubscribeToNewsletter } from '@/lib/hooks/useSubscribeToNewsletter';

const navigation = {
  general: [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' }
  ],
  specifics: [
    { name: 'Activity', href: '/activity' },
    { name: 'Statistics', href: '/stats' },
    { name: 'Toolbox', href: '/toolbox' },
    {
      name: 'Snippets',
      href: 'https://www.notion.so/9f35162787e0448094188b66304cf9f6?v=1b9c4e146edf46148fe7b1c5346cbea4'
    }
  ],
  extra: [
    { name: 'Newsletter', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Books', href: '/books' },
    { name: 'Resume', href: '#' }
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg
          className="w-7 h-7 transform hover:rotate-[-4deg] transition"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props) => (
        <svg
          className="w-7 h-7 transform hover:rotate-[-4deg] transition"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.75 11.75V16.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.75 11.75V16.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.75 8.75V9.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg
          className="w-7 h-7 transform hover:rotate-[-4deg] transition"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.75 12C4.75 10.7811 5.05079 9.63249 5.58219 8.62429L4.80156 6.0539C4.53964 5.19151 5.46262 4.44997 6.24833 4.89154L8.06273 5.91125C9.1965 5.17659 10.5484 4.75 12 4.75C13.4526 4.75 14.8054 5.17719 15.9396 5.91278L17.7624 4.8911C18.549 4.45014 19.4715 5.19384 19.2075 6.05617L18.42 8.62837C18.95 9.63558 19.25 10.7828 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )
    },
    {
      name: 'CodePen',
      href: '#',
      icon: (props) => (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="w-5 h-5 transform hover:rotate-[-4deg] transition"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
        </svg>
      )
    }
  ]
};

export function Footer() {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();
  return (
    <>
      <footer>
        <hr />
        <div className="xl:grid xl:grid-cols-4 xl:gap-2">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold  tracking-wider uppercase">
                  General
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {navigation.general.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-600 hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 no-underline hover:underline"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold  tracking-wider uppercase">
                  Specifics
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {navigation.specifics.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-600 hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 no-underline hover:underline"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold  tracking-wider uppercase">
                  Extra
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {navigation.extra.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-600 hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 no-underline hover:underline"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0 col-span-2">
            <Subscribe size={SubscribeSize.SMALL} />
          </div>
        </div>
        <div className="mt-12 flex justify-between items-center">
          <div className="flex items-center space-x-6 order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 important"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="text-base order-1">
            &copy; {new Date().getFullYear()} {siteMetadata.author}
          </p>
        </div>
      </footer>
    </>
  );
}
