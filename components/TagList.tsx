import { Tag } from './Tag';

export function TagList({ tag, tags }) {
  return (
    <div className="relative my-12 overflow-x-auto">
      <div className="flex space-x-2 not-prose">
        <svg
          className="flex-none w-5 h-5"
          viewBox="0 0 20 20"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path
            d="m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z"
            className="stroke-slate-400 dark:stroke-slate-300"
          ></path>
          <path
            d="M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5"
            className="stroke-teal-400"
          ></path>
        </svg>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Scroll to view various categories
        </p>
      </div>
      <ul className="flex w-full gap-6 py-8 overflow-x-auto snap-x">
        {/* Initial tag for all topics */}
        <div className="scroll-ml-6 snap-normal snap-start shrink-0">
          <Tag activeTag={tag} tag="" />
        </div>
        {tags &&
          tags.map((tagItem) => (
            <div
              key={tagItem}
              className="scroll-ml-6 snap-normal snap-start shrink-0"
            >
              <Tag activeTag={tag} tag={tagItem} />
            </div>
          ))}
      </ul>

      {/* gradient fades */}
      <div className="absolute w-12 h-16 top-[50px] left-0 bg-gradient-to-r from-white dark:from-dark"></div>
      <div className="absolute w-12 h-16 top-[50px] right-0 bg-gradient-to-l from-white dark:from-dark"></div>
    </div>
  );
}
