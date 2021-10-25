import { useEffect, useState } from "react";

import useArticleReactions from "../lib/hooks/useArticleReactions";
import useSWR from "swr";

const fetcher = async (input) => {
  const res = await fetch(input);
  return await res.json();
};


// State that reflects if the current user has already selected a reaction for a specific blog post
const initialReactionState = {
  like_count: false,
  love_count: false,
  clap_count: false,
  party_count: false,
  has_read: false
};

const Reactions = ({ slug }) => {
    const [hasLiked, hasLoved, reactions, handleIncrementLike, handleDecrementLike, handleIncrementLove, handleDecrementLove] =
      useArticleReactions(slug);

  return (
    <div>
      {hasLiked ? (
        <button onClick={() => handleDecrementLike()}>Un Like</button>
      ) : (
        <button onClick={() => handleIncrementLike()}>Like 👍</button>
      )}
      {reactions?.like_count}

      <br/>

      {hasLoved ? (
        <button onClick={() => handleDecrementLove()}>Un love</button>
      ) : (
        <button onClick={() => handleIncrementLove()}>Love ❤️</button>
      )}
      {reactions?.love_count}
    </div>
  );
};

export default Reactions;
