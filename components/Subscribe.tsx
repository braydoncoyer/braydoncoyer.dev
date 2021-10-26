import { Form, FormState, Subscribers } from '@/lib/types';
import React, { useRef, useState } from 'react';

import { ErrorMessage } from './ErrorMessage';
import { LoadingSpinner } from './LoadingSpinner';
import { SuccessMessage } from './SuccessMessage';
import { fetcher } from '@/lib/fetcher';
import siteMetadata from '@/data/siteMetadata';
import { usePlausible } from 'next-plausible';
import useSWR from 'swr';

export function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const plausible = usePlausible();
  const inputEl = useRef(null);
  const { data: subData } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const { data: issueData } = useSWR<Subscribers>('/api/issues', fetcher);
  const subscriberCount = new Number(subData?.count);
  const issuesCount = new Number(issueData?.count);

  async function subscribe(e) {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    plausible('Subscribe');

    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Success! You've been added to the list!`
    });
  }

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        A periodic update about my life, recent blog posts, how-tos, and
        discoveries.
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        As a thank you, I'll also send you a FREE CSS tutorial! No spam -
        unsubscribe at any time!
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="bobloblaw@gmail.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
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
        <p className="text-sm text-gray-800 dark:text-gray-200">
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
