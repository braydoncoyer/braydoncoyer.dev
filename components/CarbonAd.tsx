import { useEffect, useRef } from 'react';

import siteMetadata from '@/data/siteMetadata';

export function CarbonAd() {
  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    reference.current.innerHTML = '';
    const s = document.createElement('script');
    s.id = '_carbonads_js';
    s.src = `//cdn.carbonads.com/carbon.js?serve=${siteMetadata.carbonCode}&placement=${siteMetadata.carbonPlacement}`;
    reference.current.appendChild(s);
  }, []);

  return <div ref={reference} />;
}
