import React, { Ref, useEffect, useRef, useState } from 'react';

export const useDebounce = (callback, delay) => {
  const latestCallback = useRef(null);
  const [lastCalledAt, setLastCalledAt] = useState(null);

  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (lastCalledAt) {
      const fire = () => {
        setLastCalledAt(null);
        latestCallback.current();
      };

      const fireAt = lastCalledAt + delay;
      const id = setTimeout(fire, fireAt - Date.now());
      return () => clearTimeout(id);
    }
  }, [lastCalledAt, delay]);

  return () => setLastCalledAt(Date.now());
};
