export function LoveCount({ loveCount }) {
  return (
    <div className="h-32 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold m-0">{loveCount ? loveCount : '--'}</h2>
      <p className="text-2xl m-0">❤️</p>
    </div>
  );
}
