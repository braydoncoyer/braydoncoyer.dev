import { fetcher } from '@/lib/fetcher';
import { internationalNumberFormat } from '@/lib/formatNumbers';
import useSWR from 'swr';

export function NewsletterSubs() {
  const { data: newsletterSubs } = useSWR<any>('/api/subscribers', fetcher);

  return (
    <div className="h-32 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold m-0">
        {newsletterSubs
          ? internationalNumberFormat.format(newsletterSubs.count)
          : '--'}
      </h2>
      <p className="text-base m-0">Newsletter subscribers</p>
    </div>
  );
}
