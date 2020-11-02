import React from 'react';

const MusicSection = () => (
  <div className="space-y-4">
    <h1 className="text-4xl font-semibold text-primary md:text-4xl">
      <mark>Tunes</mark>
    </h1>
    <p className="text-secondary text-sm">
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
  </div>
);

export default MusicSection;
