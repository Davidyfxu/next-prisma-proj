"use client";
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/react";

export default function SignOut() {
  return (
    <div className="absolute bottom-5 w-full flex justify-center items-center">
      <Button
        radius="full"
        onClick={() => signOut()}
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Sign me out!
      </Button>
    </div>
  );
}
