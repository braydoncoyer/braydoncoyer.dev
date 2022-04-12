import { Form, SubscribeSize, Subscribers } from '@/lib/types';

import { ErrorMessage } from './ErrorMessage';
import { LoadingSpinner } from './LoadingSpinner';
import { SuccessMessage } from './SuccessMessage';
import { fetcher } from '@/lib/fetcher';
import siteMetadata from '@/data/siteMetadata';
import useSWR from 'swr';
import { useSubscribeToNewsletter } from '@/lib/hooks/useSubscribeToNewsletter';

function SubscribeCard({
  handleSubscribe,
  form,
  inputRef,
  subscriberCount,
  issuesCount
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 my-4 w-full dark:border-gray-700 bg-[#F8FAFC] dark:bg-midnight">
      <h3 className="flex items-center mt-2 font-bold text-gray-900 md:text-2xl dark:text-gray-100">
        Updates delivered to your inbox!
        <span>
          <svg
            className="w-6 h-6 ml-1 md:w-7 md:h-7"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.25 12V10C17.25 7.1005 14.8995 4.75 12 4.75C9.10051 4.75 6.75 7.10051 6.75 10V12L4.75 16.25H19.25L17.25 12Z"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 16.75C9 16.75 9 19.25 12 19.25C15 19.25 15 16.75 15 16.75"
            ></path>
          </svg>
        </span>
      </h3>

      <p className="mb-0">
        A periodic update about my life, recent blog posts, how-tos, and
        discoveries.
      </p>
      <p className="mt-0">
        As a thank you, I'll also send you a{' '}
        <span className="text-indigo-500 font-fancy dark:text-indigo-400">
          Free CSS
        </span>{' '}
        tutorial!
      </p>
      <p>No spam - unsubscribe at any time!</p>

      <form
        className="relative my-4 space-y-4 md:space-y-0 md:flex"
        onSubmit={handleSubscribe}
      >
        <input
          ref={inputRef}
          placeholder="bobloblaw@gmail.com"
          type="email"
          autoComplete="email"
          required
          className="block w-full px-4 bg-white border-gray-300 rounded-full shadow-sm dark:bg-dark md:py-3 focus:ring-midnight dark:focus:ring-gray-100 sm:text-sm md:text-base dark:border-gray-400"
        />
        <button
          className="absolute top-[-13px] right-[3px] md:right-[5px] md:top-[5px] py-0.5 md:py-1 items-center justify-center px-4 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white rounded-full"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="mt-6 text-sm">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
          } subscribers – `}
          <a href={siteMetadata.newsletter}>{`${
            issuesCount > 0 ? issuesCount.toLocaleString() : '-'
          } issues`}</a>
        </p>
      )}
    </div>
  );
}

function InlineSubscribe({ handleSubscribe, form, inputRef }) {
  return (
    <div>
      <h3 className="my-0 text-sm font-semibold tracking-wider uppercase">
        Newsletter
      </h3>
      <p className="mt-4 text-base ">
        Get new articles delivered to your inbox!
      </p>
      <form className="relative flex my-4 space-y-0" onSubmit={handleSubscribe}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          ref={inputRef}
          placeholder="bobloblaw@gmail.com"
          type="email"
          autoComplete="email"
          required
          className="block w-full px-5 bg-white border-gray-300 rounded-full shadow-sm dark:bg-dark md:py-3 focus:ring-midnight dark:focus:ring-gray-100 sm:text-sm md:text-base dark:border-gray-400"
        />
        <button
          className="absolute right-[3px] top-[3px] md:right-[5px] md:top-[5px] py-0.5 md:py-1 items-center justify-center px-4 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white rounded-full"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : null}
    </div>
  );
}

type Props = {
  size: SubscribeSize;
};

export function Subscribe({ size }: Props) {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();
  const { data: subData } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const { data: issueData } = useSWR<Subscribers>('/api/issues', fetcher);
  const subscriberCount = new Number(subData?.count);
  const issuesCount = new Number(issueData?.count);

  if (size === SubscribeSize.SMALL) {
    return (
      <InlineSubscribe
        handleSubscribe={subscribe}
        form={form}
        inputRef={inputEl}
      />
    );
  }

  return (
    <SubscribeCard
      handleSubscribe={subscribe}
      form={form}
      inputRef={inputEl}
      subscriberCount={subscriberCount}
      issuesCount={issuesCount}
    />
  );
}
