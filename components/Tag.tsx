import Link from 'next/link';

export function Tag({ tag, activeTag }) {
  return (
    <Link href={tag ? `/blog/categories/${tag}` : '/blog'}>
      <span
        className={`mr-4 rounded-full px-6 py-1.5 cursor-pointer ${
          activeTag === tag && 'bg-teal-500 text-white'
        } hover:bg-slate-100 dark:hover:bg-midnight `}
      >
        <span className="text-base font-medium uppercase">
          {tag === '' ? 'all' : tag}
        </span>
      </span>
    </Link>
  );
}
