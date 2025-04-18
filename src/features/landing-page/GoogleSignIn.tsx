// app/components/GoogleSignIn.tsx
"use client";

import React from "react";
import { googleSignInAction } from "@/actions/google-sign-in";
import { Button } from "@/ui/shadcn-ui/button";

const GoogleSignIn = () => {
  return (
    <form action={googleSignInAction}>
      <Button className="w-full">Sign in with Google</Button>
    </form>
  );
};

export default GoogleSignIn;
