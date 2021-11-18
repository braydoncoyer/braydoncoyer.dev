import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export function TotalReactions() {
  const { data: totalReactions } = useSWR<any>(
    '/api/statistics/total-reactions',
    fetcher
  );
  return (
    <div className="col-span-4 h-32 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold m-0">
        {totalReactions ? totalReactions.totalReactions : '--'}
      </h2>
      <p className="text-base m-0">Total reactions</p>
    </div>
  );
}
