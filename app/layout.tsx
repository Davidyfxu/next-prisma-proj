// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import React, { Suspense } from "react";
import { NextAuthProvider } from "./providers";


const title = "Next Prisma Project";
const description =
  "This is a Next Prisma Project";

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
    <html lang="en">
      <body>
        <Toaster />
        <Suspense fallback="Loading...">
          <AuthStatus />
        </Suspense>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
