import React from 'react';

const MusicSection = () => (
  <section>
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-rose-600 dark:text-rose-500 mb-3">
      Tunes
    </h2>
    <p className="text-coolGray-900 dark:text-white text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
      Music while coding? Absolutely.
    </p>
    <p className="text-coolGray-600 dark:text-coolGray-400 prose-lg mb-6">
      Lord of the Rings is my favorite movie series ever. Not only is it a
      beautiful movie, but the music score transports you to a magical place.
      When coding, I pop in some AirPods and turn to this playlist.
    </p>
    <div>
      <iframe
        title="Coding Playlist"
        className="w-full bg-transparent overflow-hidden"
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="450"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/playlist/the-lord-of-the-rings-the-complete-recordings/pl.u-4D9tmlJYzM"
      />
    </div>
  </section>
);

export default MusicSection;
