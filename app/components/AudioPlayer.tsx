interface AudioPlayerProps {
  audioSrc: string;
  title: string;
}

export function AudioPlayer({ audioSrc, title }: AudioPlayerProps) {
  return (
    <div className="relative -mx-3 mb-8 w-[100vw] overflow-clip border-y border-border-primary px-6 py-8 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px] md:col-start-1 md:col-end-4 md:mx-0 md:w-full md:px-0">
      <div className="blog-container drama-shadow mx-auto rounded-md bg-bg-primary p-6">
        <div className="mb-4 flex items-center gap-2">
          <svg
            className="h-5 w-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
          <h3 className="text-sm font-medium text-indigo-600">
            You can listen to this article
          </h3>
        </div>

        <audio controls preload="metadata" className="w-full" src={audioSrc}>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
