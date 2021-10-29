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
    <div className="flex justify-between items-center">
      <div
        role="button"
        onClick={
          hasLiked ? () => handleDecrementLike() : () => handleIncrementLike()
        }
        className="bg-[#F8FAFC] px-8 py-4 rounded-lg flex flex-col items-center"
      >
        <span className="text-4xl">👍</span>
        <span className="text-xl font-semibold">{reactions?.like_count}</span>
        <span className="text-sm">LIKE</span>
      </div>

      <div
        role="button"
        onClick={
          hasLoved ? () => handleDecrementLove() : () => handleIncrementLove()
        }
        className="bg-[#F8FAFC] px-8 py-4 rounded-lg flex flex-col items-center"
      >
        <span className="text-4xl">❤️</span>
        <span className="text-xl font-semibold">{reactions?.love_count}</span>
        <span className="text-sm uppercase">LOVE</span>
      </div>

      <div
        role="button"
        onClick={
          hasClapped ? () => handleDecrementClap() : () => handleIncrementClap()
        }
        className="bg-[#F8FAFC] px-8 py-4 rounded-lg flex flex-col items-center"
      >
        <span className="text-4xl">👏</span>
        <span className="text-xl font-semibold">{reactions?.clap_count}</span>
        <span className="text-sm uppercase">CLAP</span>
      </div>

      <div
        role="button"
        onClick={
          hasPartied
            ? () => handleDecrementParty()
            : () => handleIncrementParty()
        }
        className="bg-[#F8FAFC] px-8 py-4 rounded-lg flex flex-col items-center"
      >
        <span className="text-4xl">🎉</span>
        <span className="text-xl font-semibold">{reactions?.party_count}</span>
        <span className="text-sm uppercase">PARTY</span>
      </div>
    </div>
  );
};

export default Reactions;
