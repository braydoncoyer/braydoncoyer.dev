import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export default function Stats() {
  const { data: totalArticles } = useSWR<any>(
    '/api/statistics/total-articles',
    fetcher
  );
  const { data: totalPageviews } = useSWR<any>(
    '/api/statistics/total-pageviews',
    fetcher
  );

  const { data: liveVisitors } = useSWR<any>(
    '/api/statistics/visitors',
    fetcher
  );

  const { data: newsletterSubs } = useSWR<any>('/api/subscribers', fetcher);

  let internationalNumberFormat = new Intl.NumberFormat('en-US');
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-6">
          <div className="grid grid-cols-6 gap-4">
            <h4 className="col-span-6 m-0">Site stats</h4>
            <div className="col-span-6 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
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
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold m-0">
                {totalPageviews
                  ? internationalNumberFormat.format(totalPageviews.pageviews)
                  : '--'}
              </h2>
              <p className="text-base m-0">Total page views</p>
            </div>
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold m-0">
                {newsletterSubs
                  ? internationalNumberFormat.format(newsletterSubs.count)
                  : '--'}
              </h2>
              <p className="text-base m-0">Newsletter subscribers</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="grid grid-cols-6 gap-4">
            <h4 className="col-span-6 m-0">Article stats</h4>
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold m-0">
                {totalArticles ? totalArticles.totalArticles : '--'}
              </h2>
              <p className="text-base m-0">Published articles</p>
            </div>
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold m-0">7</h2>
              <p className="text-base m-0">Sponsored articles</p>
            </div>
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl m-0">👍</h2>
              <p className="text-3xl font-bold m-0">
                {internationalNumberFormat.format(307)}
              </p>
            </div>
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl m-0">❤️</h2>
              <p className="text-3xl font-bold m-0">
                {internationalNumberFormat.format(307)}
              </p>
            </div>
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl m-0">👏</h2>
              <p className="text-3xl font-bold m-0">
                {internationalNumberFormat.format(307)}
              </p>
            </div>
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl m-0">🎉</h2>
              <p className="text-3xl font-bold m-0">
                {internationalNumberFormat.format(307)}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="grid grid-cols-6 gap-4">
            <h4 className="col-span-6 m-0">Social stats</h4>
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold m-0">
                {internationalNumberFormat.format(1062)}
              </h2>
              <p className="text-base m-0">Twitter followers</p>
            </div>
            <div className="col-span-3 bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold m-0">
                {internationalNumberFormat.format(293)}
              </h2>
              <p className="text-base m-0">GitHub followers</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const twitterFollowers = await fetch('/api/statistics/twitter-followers');
//   const githubFollowers = await fetch('/api/statistics/github-followers');

//   console.log(twitterFollowers, githubFollowers);

//   return {
//     props: {
//       twitterFollowers,
//       githubFollowers
//     },
//     revalidate: 60
//   };
// };
