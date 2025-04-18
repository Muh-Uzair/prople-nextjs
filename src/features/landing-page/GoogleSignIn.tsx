// app/components/GoogleSignIn.tsx
"use client";

import React from "react";
import { googleSignInAction } from "@/actions/google-sign-in";

const GoogleSignIn = () => {
  return (
    <form action={googleSignInAction}>
      <button>Sign in with Google</button>
    </form>
  );
};

export default GoogleSignIn;
