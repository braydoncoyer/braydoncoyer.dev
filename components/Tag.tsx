export function Tag({ tag, cb, activeTag }) {
  return (
    <button
      onClick={() => cb()}
      className={`mr-4 rounded-full px-6 py-1 ${
        activeTag === tag && 'ring-2 ring-teal-500 text-teal-500'
      } hover:ring-2 hover:ring-gray-300 `}
    >
      <span className="text-base font-medium uppercase">
        {tag === '' ? 'all' : tag}
      </span>
    </button>
  );
}
