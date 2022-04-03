import { Button } from './Button';
import { ButtonType } from '@/lib/types';
import siteMetadata from '@/data/siteMetadata';

export function AuthButon({ supabase }) {
  function handleGitHubLogin() {
    supabase.auth.signIn(
      { provider: 'github' },
      { redirectTo: `${siteMetadata.siteUrl}/community-wall` }
    );
  }
  return (
    <div>
      <Button buttonType={ButtonType.PRIMARY} onButtonClick={handleGitHubLogin}>
        Log in
      </Button>
    </div>
  );
}
