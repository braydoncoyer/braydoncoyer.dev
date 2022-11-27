import { fetcher } from '@/lib/fetcher';
import { internationalNumberFormat } from '@/lib/formatNumbers';
import useSWR from 'swr';

export function NewsletterSubs() {
  const { data: newsletterSubs } = useSWR<any>('/api/subscribers', fetcher);

  return (
    <div className="flex flex-col items-center justify-center h-32 col-span-2 p-6 text-center bg-gray-100 dark:bg-midnight rounded-3xl">
      <h2 className="m-0 text-3xl font-bold">
        {newsletterSubs
          ? internationalNumberFormat.format(newsletterSubs.count)
          : '--'}
      </h2>
      <p className="m-0 text-base">Newsletter subscribers</p>
    </div>
  );
}
