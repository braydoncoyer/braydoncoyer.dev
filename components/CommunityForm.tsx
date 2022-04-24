import { Form, FormState } from '@/lib/types';
import { useRef, useState } from 'react';

import { AuthButon } from './AuthButton';
import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';
import { useSWRConfig } from 'swr';

export function CommunityForm({ loggedIn, supabase, session }) {
  const { mutate } = useSWRConfig();
  const message = useRef<HTMLInputElement>();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });

  async function handleSendMessage(evt) {
    evt.preventDefault();

    setForm({
      state: Form.Loading,
      message: 'Sending note...'
    });
    const content = message.current.value;
    const res = await fetch('/api/community-wall', {
      body: JSON.stringify({
        message: {
          content,
          userId: session.user.id
        }
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
        message: 'Something went wrong...'
      });
      return;
    }

    mutate('/api/community-wall');
    setForm({
      state: Form.Success,
      message: 'Thanks for leaving me a note!'
    });

    message.current.value = '';
  }
  return (
    <>
      <div className="border border-gray-200 rounded-lg p-6 my-4 w-full dark:border-gray-700 bg-[#F8FAFC] dark:bg-midnight">
        <h3 className="p-0 mt-0">Leave a note</h3>
        <p>Share a message with me or another visitor of my site.</p>
        {loggedIn ? (
          <div>
            <form
              className="relative my-4 space-y-4 md:space-y-0 md:flex"
              onSubmit={handleSendMessage}
            >
              <input
                ref={message}
                placeholder="Your note goes here..."
                autoComplete="email"
                required
                className="block w-full px-5 py-1.5 bg-white border-gray-300 rounded-full shadow-sm dark:bg-dark md:py-3 focus:ring-midnight dark:focus:ring-gray-100 sm:text-sm md:text-base dark:border-gray-400"
              />
              <button
                className="absolute top-[-14px] right-[2px] md:right-[4px] md:top-[4px] py-1 items-center justify-center px-6 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white rounded-full"
                type="submit"
              >
                Send
              </button>
            </form>
            <p className="p-0 m-0 text-base opacity-60 no-prose">
              Your information is only used to display your name.
            </p>
            {form.state === Form.Error ? (
              <ErrorMessage>{form.message}</ErrorMessage>
            ) : form.state === Form.Success ? (
              <SuccessMessage>{form.message}</SuccessMessage>
            ) : null}
          </div>
        ) : (
          <AuthButon supabase={supabase} />
        )}
      </div>
    </>
  );
}
