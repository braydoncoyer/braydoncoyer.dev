import useArticleReactions from '@/hooks/useArticleReactions';
import { useDebounce } from '@/lib/hooks/useDebounce';

const Reactions = ({ slug }) => {
  const {
    hasLiked,
    hasLoved,
    hasClapped,
    hasPartied,
    reactions,
    handleIncrementLike,
    handleDecrementLike,
    handleIncrementLove,
    handleDecrementLove,
    handleIncrementClap,
    handleDecrementClap,
    handleIncrementParty,
    handleDecrementParty
  } = useArticleReactions(slug);

  return (
    <div className="flex flex-wrap gap-3">
      <ReactionCard
        isActive={hasLiked}
        incrementCB={handleIncrementLike}
        decrementCB={handleDecrementLike}
      >
        <p className="m-0">
          <span className="mr-1.5 text-2xl">👍</span>{' '}
          <span className="text-base font-black font-headings">
            {reactions?.like_count}
          </span>
        </p>
      </ReactionCard>

      <ReactionCard
        isActive={hasLoved}
        incrementCB={handleIncrementLove}
        decrementCB={handleDecrementLove}
      >
        <p className="m-0">
          <span className="mr-1.5 text-2xl">❤️</span>{' '}
          <span className="text-base font-black font-headings">
            {reactions?.love_count}
          </span>
        </p>
      </ReactionCard>

      <ReactionCard
        isActive={hasClapped}
        incrementCB={handleIncrementClap}
        decrementCB={handleDecrementClap}
      >
        <p className="m-0">
          <span className="mr-1.5 text-2xl">👏</span>{' '}
          <span className="text-base font-black font-headings">
            {reactions?.clap_count}
          </span>
        </p>
      </ReactionCard>

      <ReactionCard
        isActive={hasPartied}
        incrementCB={handleIncrementParty}
        decrementCB={handleDecrementParty}
      >
        <p className="m-0">
          <span className="mr-1.5 text-2xl">🎉</span>{' '}
          <span className="text-base font-black font-headings">
            {reactions?.party_count}
          </span>
        </p>
      </ReactionCard>
    </div>
  );
};

export default Reactions;

function ReactionCard({ isActive, incrementCB, decrementCB, children }) {
  const handleClick = useDebounce(
    isActive ? () => decrementCB() : () => incrementCB(),
    300
  );
  return (
    <div
      role="button"
      onClick={handleClick}
      className={`${
        isActive
          ? 'bg-slate-300 dark:bg-darker'
          : 'bg-blueGray-100 dark:bg-midnight'
      }  w-full px-4 active:scale-x-90 active:scale-y-90 py-2 rounded-3xl select-none transition ease-in-out border border-slate-200 dark:border-slate-700`}
    >
      {children}
    </div>
  );
}
