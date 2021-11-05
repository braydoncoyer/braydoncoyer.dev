import useArticleReactions from '@/hooks/useArticleReactions';

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
    <div className="flex justify-between items-center space-x-6">
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
  return (
    <div
      role="button"
      onClick={isActive ? () => decrementCB() : () => incrementCB()}
      className={`${
        isActive
          ? 'bg-gray-300 dark:bg-darker'
          : 'bg-blueGray-100 dark:bg-midnight'
      } flex-1 py-4 rounded-lg flex flex-col items-center hover:ring-2 ring-midnight dark:ring-gray-100 transition-all`}
    >
      {children}
    </div>
  );
}
