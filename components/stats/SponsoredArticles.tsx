import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export function SponsoredArticles() {
  const { data: totlaSponsored } = useSWR<any>(
    '/api/statistics/total-sponsored-articles',
    fetcher
  );
  return (
    <div className="flex flex-col items-center justify-center h-32 col-span-2 p-6 text-center bg-gray-100 dark:bg-midnight rounded-3xl">
      <h2 className="m-0 text-3xl font-bold">
        {totlaSponsored ? totlaSponsored.totalSponsored : '--'}
      </h2>
      <p className="m-0 text-base">Sponsored articles</p>
    </div>
  );
}
