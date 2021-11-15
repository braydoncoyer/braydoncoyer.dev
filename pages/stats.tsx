import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { NewsletterSubs } from '@/components/stats/Newslettersubs';
import { Pageviews } from '@/components/stats/Pageviews';
import { SocialFollowers } from '@/components/stats/SocialFollowers';
import { SponsoredArticles } from '@/components/stats/SponsoredArticles';
import { TotalArticles } from '@/components/stats/TotalArticles';
import { TotalReactions } from '@/components/stats/TotalReactions';
import { Visitors } from '@/components/stats/Visitors';
import { fetcher } from '@/lib/fetcher';
import { getGitHubFollowers } from '@/lib/getGitHubFollowers';
import { getTwitterFollowers } from '@/lib/getTwitterFollowers';
import useSWR from 'swr';

export default function Stats({ twitterFollowers, githubFollowers }) {
  const { data: totalArticles } = useSWR<any>(
    '/api/statistics/total-articles',
    fetcher
  );

  let internationalNumberFormat = new Intl.NumberFormat('en-US');
  return (
    <Container>
      {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
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
      </div> */}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mb-1">
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          <div className="col-span-2">
            <h2 className="mb-0 text-base uppercase">Site Stats</h2>
          </div>
          <Visitors />
          <Pageviews />
          <NewsletterSubs />
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          <div className="col-span-2">
            <h2 className="mb-0 text-base uppercase">Article Stats</h2>
          </div>
          <TotalArticles />
          <SponsoredArticles />
          <TotalReactions />
        </div>
      </div>
      <div className="md:col-span-2 grid grid-cols-2 gap-2 md:gap-6 mb-1">
        <div className="sm:col-span-2">
          <h2 className="mb-0 text-base uppercase">Social Stats</h2>
        </div>
        <div className="col-span-2 md:col-span-1 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg flex flex-col items-center">
          <SocialFollowers siteName="Twitter" followers={twitterFollowers} />
        </div>
        <div className="col-span-2 md:col-span-1 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg flex flex-col items-center">
          <SocialFollowers siteName="GitHub" followers={githubFollowers} />
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const twitterFollowers = await getTwitterFollowers();
  const githubFollowers = await getGitHubFollowers();

  return {
    props: {
      twitterFollowers,
      githubFollowers
    },
    revalidate: 10000
  };
};
