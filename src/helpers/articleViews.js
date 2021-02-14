import React, { useEffect, useState } from 'react';
import firebase from 'gatsby-plugin-firebase';
import incrementViews from '../lib/increment-views';

const ArticleViews = ({ id }) => {
  const [viewCount, setViewCount] = useState('');

  useEffect(() => {
    // 1 is displayed for a split second and then the correct count
    // This is a workaround
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val());
    };

    incrementViews(id);

    firebase.database().ref(`/views`).child(id).on(`value`, onViews);

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews);
      }
    };
  }, [id]);

  return (
    <div className="text-sm text-coolGray-600 dark:text-coolGray-400 min-w-32 mt-2 md:mt-0">
      {viewCount || `---`} views
    </div>
  );
};

export default ArticleViews;
