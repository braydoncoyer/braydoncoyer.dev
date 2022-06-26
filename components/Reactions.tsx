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
    <div className="grid items-center justify-between grid-cols-4 gap-6 md:grid-cols-2">
      <ReactionCard
        isActive={hasLiked}
        incrementCB={handleIncrementLike}
        decrementCB={handleDecrementLike}
      >
        <span className="text-4xl">👍</span>
        <span className="text-xl font-semibold">{reactions?.like_count}</span>
        <span className="text-sm">LIKE</span>
      </ReactionCard>

      <ReactionCard
        isActive={hasLoved}
        incrementCB={handleIncrementLove}
        decrementCB={handleDecrementLove}
      >
        <span className="text-4xl">❤️</span>
        <span className="text-xl font-semibold">{reactions?.love_count}</span>
        <span className="text-sm uppercase">LOVE</span>
      </ReactionCard>

      <ReactionCard
        isActive={hasClapped}
        incrementCB={handleIncrementClap}
        decrementCB={handleDecrementClap}
      >
        <span className="text-4xl">👏</span>
        <span className="text-xl font-semibold">{reactions?.clap_count}</span>
        <span className="text-sm uppercase">CLAP</span>
      </ReactionCard>

      <ReactionCard
        isActive={hasPartied}
        incrementCB={handleIncrementParty}
        decrementCB={handleDecrementParty}
      >
        <span className="text-4xl">🎉</span>
        <span className="text-xl font-semibold">{reactions?.party_count}</span>
        <span className="text-sm uppercase">PARTY</span>
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
          ? 'bg-gray-300 dark:bg-darker'
          : 'bg-blueGray-100 dark:bg-midnight'
      } flex-1 py-4 rounded-lg flex flex-col items-center general-ring-state select-none`}
    >
      {children}
    </div>
  );
}
