// @ts-nocheck
import React, { useEffect } from 'react';

import { AdType } from '@/lib/types';

interface GoogleAdProps {
  variant?: AdType;
}

const adUnitProps: Record<AdType, any> = {
  [AdType.ARTICLE]: {
    'data-ad-slot': '4448413641',
    'data-ad-format': 'fluid',
    'data-ad-layout': 'in-article'
  },
  [AdType.RESPONSIVE]: {
    'data-ad-slot': '6270020953',
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true'
  }
};

export default function Adsense({ variant = AdType.DEFAULT }: GoogleAdProps) {
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
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
      {...adUnitProps[variant]}
    ></ins>
  );
}
