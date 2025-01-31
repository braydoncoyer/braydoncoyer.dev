import { redirect } from "next/navigation";
import createSupabaseServerClient from "../lib/supabase/server";
import { CreateCommunityNoteBuilder } from "./CreateCommunityNoteBuilder";
import { SignInWithGitHub } from "./SignInWithGitHub";

// Move the server action outside the component and mark it with 'use server'
async function handleCreateCommunityNote(formData: FormData) {
  "use server";

  const message = formData.get("message") as string;
  const patternIndex = parseInt(formData.get("patternIndex") as string);
  const rotation = parseInt(formData.get("rotation") as string);

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const newNote = {
    message,
    patternindex: patternIndex,
    rotation: rotation,
    user_id: user.id,
    creator_name: user.user_metadata.full_name,
    creator_avatar_url: user.user_metadata.avatar_url,
  };

  const { error } = await supabase.from("messages").insert(newNote).select();

  if (!error) {
    redirect("/community-wall");
  }
}

export async function CommunityWallModal() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70">
      <div className="flex min-h-screen items-center justify-center">
        {!user ? (
          <SignInWithGitHub />
        ) : (
          <CreateCommunityNoteBuilder
            onSubmit={handleCreateCommunityNote}
            creator_name={user.user_metadata.full_name}
            creator_avatar_url={user.user_metadata.avatar_url}
          />
        )}
      </div>
    </div>
  );
}
