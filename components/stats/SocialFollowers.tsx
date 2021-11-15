import { internationalNumberFormat } from '@/lib/formatNumbers';
import { SocialFollowers } from '@/lib/types';

type Props = {
  siteName: string;
  followers: SocialFollowers;
};

export function SocialFollowers({ siteName, followers }: Props) {
  return (
    <div className="col-span-2 h-32 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <h2 className="text-3xl font-bold m-0">
          {internationalNumberFormat.format(followers.followers)}
        </h2>
      </div>
      <p className="text-base m-0">{siteName} followers</p>
    </div>
  );
}
