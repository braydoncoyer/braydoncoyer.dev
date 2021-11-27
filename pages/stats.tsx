import { Ad } from '@/components/Ad';
import { ClapCount } from '@/components/stats/ClapCount';
import { Container } from 'layouts/Container';
import { LikeCount } from '@/components/stats/LikeCount';
import { LoveCount } from '@/components/stats/LoveCount';
import { NewsletterSubs } from '@/components/stats/Newslettersubs';
import { Pageviews } from '@/components/stats/Pageviews';
import { PartyCount } from '@/components/stats/PartyCount';
import { SponsoredArticles } from '@/components/stats/SponsoredArticles';
import { TotalArticles } from '@/components/stats/TotalArticles';
import { TotalReactions } from '@/components/stats/TotalReactions';
import { Visitors } from '@/components/stats/Visitors';
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export default function Stats() {
  const { data: totalReactions } = useSWR<any>(
    '/api/statistics/total-reactions',
    fetcher
  );

  return (
    <Container>
      <h1>
        <span className="block text-base text-center text-teal-500 dark:text-teal-400 font-semibold tracking-wide uppercase">
          Stats
        </span>
        <span className="mt-2 block text-4xl text-center leading-10 font-bold sm:text-5xl max-w-2xl mx-auto">
          Interested in numbers? I've got you covered.
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-2 md:gap-6">
        <div className="col-span-4">
          <h2 className="mb-0 text-base uppercase flex items-center">
            Site Stats{' '}
            <span className="text-xs ml-4 text-gray-400 dark:text-gray-600">
              (updated every 60 seconds)
            </span>
          </h2>
        </div>
        <Visitors />
        <Pageviews />
        <NewsletterSubs />
      </div>
      <div className="my-8 flex justify-center items-center">
        <Ad />
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-6">
        <div className="col-span-4">
          <h2 className="mb-0 text-base uppercase flex items-center">
            Article Stats{' '}
            <span className="text-xs ml-4 text-gray-400 dark:text-gray-600">
              (updated every 60 seconds)
            </span>
          </h2>
        </div>
        <TotalArticles />
        <SponsoredArticles />
        <LikeCount likeCount={totalReactions?.likeCount} />
        <LoveCount loveCount={totalReactions?.loveCount} />
        <ClapCount clapCount={totalReactions?.clapCount} />
        <PartyCount partyCount={totalReactions?.partyCount} />
        <TotalReactions />
      </div>
    </Container>
  );
}
