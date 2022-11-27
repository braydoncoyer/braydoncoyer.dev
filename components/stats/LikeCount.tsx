export function LikeCount({ likeCount }) {
  return (
    <div className="flex flex-col items-center justify-center h-32 p-6 text-center bg-gray-100 dark:bg-midnight rounded-3xl">
      <h2 className="m-0 text-3xl font-bold">{likeCount ? likeCount : '--'}</h2>
      <p className="m-0 text-2xl">👍</p>
    </div>
  );
}
