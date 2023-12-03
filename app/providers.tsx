"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
};
