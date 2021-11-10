import { Form, FormState } from '../types';
import { useRef, useState } from 'react';

import { usePlausible } from 'next-plausible';

export function useSubscribeToNewsletter() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const plausible = usePlausible();
  const inputEl = useRef(null);

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

  return { subscribe, inputEl, form };
}
