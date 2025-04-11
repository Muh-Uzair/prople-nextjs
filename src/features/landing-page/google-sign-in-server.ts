// app/actions/auth/google-sign-in.ts
"use server";

import { signIn } from "@/auth"; // if you're using the new NextAuth v5 with `@auth`

export async function googleSignInAction() {
  // Optionally pass `redirectTo` if needed
  await signIn("google");
}
