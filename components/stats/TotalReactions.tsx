import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export function TotalReactions() {
  const { data: totalReactions } = useSWR<any>(
    '/api/statistics/total-reactions',
    fetcher
  );
  return (
    <div className="flex flex-col items-center justify-center h-32 col-span-4 p-6 text-center bg-gray-100 dark:bg-midnight rounded-3xl">
      <h2 className="m-0 text-3xl font-bold">
        {totalReactions ? totalReactions.totalReactions : '--'}
      </h2>
      <p className="m-0 text-base">Total reactions</p>
    </div>
  );
}
