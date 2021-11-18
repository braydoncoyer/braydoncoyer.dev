import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export function Visitors() {
  const { data: liveVisitors } = useSWR<any>(
    '/api/statistics/visitors',
    fetcher
  );
  return (
    <div className="col-span-4 h-32 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <h2 className="text-3xl font-bold m-0">
          {liveVisitors ? liveVisitors?.visitors : '--'} people
        </h2>
        <span className="flex h-3 w-3">
          <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-teal-400 opacity-75"></span>
        </span>
      </div>
      <p className="text-base m-0">Visiting right now</p>
    </div>
  );
}
