export function Tag({ tag, cb }) {
  return (
    <div className="my-2 mr-4 rounded-full px-6 py-2 bg-gray-100 dark:bg-midnight hover:ring-2 ring-midnight dark:ring-gray-100  transition-all">
      <button onClick={() => cb()}>{tag}</button>
    </div>
  );
}
