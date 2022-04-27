import dayjs from 'dayjs';
import { useSWRConfig } from 'swr';

export function CommunityEntry({ session, message }) {
  const { mutate } = useSWRConfig();

  async function handleDeleteMessage() {
    const res = await fetch('/api/community-wall', {
      body: JSON.stringify({
        message: {
          id: message.id
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    });

    const { error } = await res.json();

    if (error) {
      console.error(error);
    }

    mutate('/api/community-wall');
  }
  return (
    <>
      <p className="p-0 m-0 text-gray-900 dark:text-white">{message.content}</p>
      <div className="flex items-center space-x-6 text-base">
        <p>
          {message.user.name} ∿ {dayjs(message.created_at).format('MM/DD/YYYY')}
        </p>
        {session && session.user.id === message.user_id ? (
          <button onClick={handleDeleteMessage} className="text-rose-400">
            Delete
          </button>
        ) : null}
      </div>
    </>
  );
}
