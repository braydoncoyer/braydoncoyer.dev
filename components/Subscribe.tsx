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
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="px-6 py-4 bg-[#F8FAFC] dark:bg-midnight rounded-3xl sm:py-8 sm:px-12 lg:flex lg:items-center lg:p-8 border border-slate-200 dark:border-slate-700">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Updates delivered to your inbox!
            </h2>
            <p className="max-w-3xl mt-4 ">
              A periodic update about my life, recent blog posts, how-tos, and
              discoveries.
            </p>
            <p className="mt-6 mb-0 text-sm">
              No spam - unsubscribe at any time!
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-4 lg:flex-1">
            <form className="sm:flex" onSubmit={handleSubscribe}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                ref={inputRef}
                id="email-address"
                name="email-address"
                placeholder="bobloblaw@gmail.com"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 bg-white dark:bg-dark border-gray-300 dark:border-gray-400 rounded-full placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#F8FAFC] dark:focus:ring-offset-midnight"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-full hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
              </button>
            </form>
            {form.state === Form.Error ? (
              <ErrorMessage>{form.message}</ErrorMessage>
            ) : form.state === Form.Success ? (
              <SuccessMessage>{form.message}</SuccessMessage>
            ) : (
              <p className="mt-6 mb-0 text-sm">
                {`${
                  subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
                } subscribers – `}
                <a href={siteMetadata.newsletter}>{`${
                  issuesCount > 0 ? issuesCount.toLocaleString() : '-'
                } issues`}</a>
              </p>
            )}
          </div>
        </div>
      </div>
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
