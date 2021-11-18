import { fetcher } from '@/lib/fetcher';
import { internationalNumberFormat } from '@/lib/formatNumbers';
import useSWR from 'swr';

export function Pageviews() {
  const { data: totalPageviews } = useSWR<any>(
    '/api/statistics/total-pageviews',
    fetcher
  );

  return (
    <div className="h-32 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center col-span-2">
      <h2 className="text-3xl font-bold m-0">
        {totalPageviews
          ? internationalNumberFormat.format(totalPageviews.pageviews)
          : '--'}
      </h2>
      <p className="text-base m-0">Total page views</p>
    </div>
  );
}
