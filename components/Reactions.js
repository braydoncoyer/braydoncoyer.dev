import useArticleReactions from "@/hooks/useArticleReactions";

const Reactions = ({ slug }) => {
    const { hasLiked, hasLoved, hasClapped, hasPartied,
      reactions, handleIncrementLike, handleDecrementLike,
      handleIncrementLove, handleDecrementLove, handleIncrementClap,
      handleDecrementClap, handleIncrementParty, handleDecrementParty
    } = useArticleReactions(slug);

  return (
    <div>
      {hasLiked ? (
        <button onClick={() => handleDecrementLike()}>Un Like</button>
      ) : (
        <button onClick={() => handleIncrementLike()}>Like 👍</button>
      )}
      {reactions?.like_count}

      <br />

      {hasLoved ? (
        <button onClick={() => handleDecrementLove()}>Un love</button>
      ) : (
        <button onClick={() => handleIncrementLove()}>Love ❤️</button>
      )}
      {reactions?.love_count}

      <br />

      {hasClapped ? (
        <button onClick={() => handleDecrementClap()}>Un clap</button>
      ) : (
        <button onClick={() => handleIncrementClap()}>Clap 👏</button>
      )}
      {reactions?.clap_count}

      <br />

      {hasPartied ? (
        <button onClick={() => handleDecrementParty()}>Un party</button>
      ) : (
        <button onClick={() => handleIncrementParty()}>Party 🎉</button>
      )}
      {reactions?.party_count}
    </div>
  );
};

export default Reactions;
