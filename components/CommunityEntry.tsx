import Image from 'next/legacy/image';
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
    <div className="p-6 rounded-3xl bg-[#F8FAFC] dark:bg-midnight">
      <div className="flex items-start justify-between mb-4 space-x-6">
        <div className="flex space-x-6">
          <img
            className="flex-shrink-0 w-8 h-8 rounded-full "
            src={
              message.user.avatar_url
                ? message.user.avatar_url
                : `https://robohash.org/${message.user.name}.png`
            }
            alt="profile picture"
          />
          <div>
            <h5 className="text-indigo-600 dark:text-indigo-500">
              {message.user.name}
            </h5>
            <p className="flex items-start p-0 m-0 leading-7">
              <span>{message.content}</span>
            </p>
            <div className="mt-4 text-base">
              {session && session.user.id === message.user_id ? (
                <button
                  onClick={handleDeleteMessage}
                  className="text-rose-400 hover:text-rose-500"
                >
                  Delete
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p className="p-0 m-0 text-base text-slate-400 dark:text-slate-500">
            {dayjs(message.created_at).format('MM/DD/YYYY')}
          </p>
        </div>
      </div>
    </div>
  );
}
