// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import React, { Suspense } from "react";
import { NextProvider } from "./providers";
import AuthStatus from "@/components/auth-status";
import { Spinner } from "@nextui-org/react";
import SignOut from "@/components/sign-out";

const title = "love-syy";
const description = "A website for SYY and XYF";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Suspense fallback={<Spinner color="primary" />}>
          <AuthStatus />
        </Suspense>
        <Toaster />
        <NextProvider>{children}</NextProvider>
      </body>
    </html>
  );
}
