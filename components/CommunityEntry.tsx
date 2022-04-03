import dayjs from 'dayjs';
export function CommunityEntry({ content, name, created_at }) {
  return (
    <>
      <p className="p-0 m-0 text-gray-900 dark:text-white">{content}</p>
      <span className="text-base">
        {name} ∿ {dayjs(created_at).format('DD/MM/YYYY')}
      </span>
    </>
  );
}
