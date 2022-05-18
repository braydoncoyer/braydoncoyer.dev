// @ts-nocheck
import React, { useEffect } from 'react';

export default function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log('Adsense error', error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4264459124014608"
      data-ad-slot="6270020953"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
