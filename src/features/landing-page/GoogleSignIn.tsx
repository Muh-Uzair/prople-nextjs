// app/components/GoogleSignIn.tsx
"use client";

import React from "react";
import { googleSignInAction } from "./google-sign-in-server";
import Button from "@/ui/Button";

const GoogleSignIn = () => {
  return (
    <form action={googleSignInAction}>
      <Button submit={true} fullWidth={true}>
        Sign in with Google
      </Button>
    </form>
  );
};

export default GoogleSignIn;
