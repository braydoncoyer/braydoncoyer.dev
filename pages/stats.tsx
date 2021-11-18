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
      <div className="grid grid-cols-4 gap-2 md:gap-6">
        <div className="col-span-4">
          <h2 className="mb-0 text-base uppercase">Site Stats</h2>
        </div>
        <Visitors />
        <Pageviews />
        <NewsletterSubs />
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-6">
        <div className="col-span-4">
          <h2 className="mb-0 text-base uppercase">Article Stats</h2>
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
