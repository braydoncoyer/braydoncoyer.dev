import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export function TotalArticles() {
  const { data: totalArticles } = useSWR<any>(
    '/api/statistics/total-articles',
    fetcher
  );
  return (
    <div className="flex flex-col items-center justify-center h-32 col-span-2 p-6 text-center bg-gray-100 dark:bg-midnight rounded-3xl">
      <h2 className="m-0 text-3xl font-bold">
        {totalArticles ? totalArticles.totalArticles : '--'}
      </h2>
      <p className="m-0 text-base">Published articles</p>
    </div>
  );
}
