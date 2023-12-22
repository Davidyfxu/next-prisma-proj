"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IUser } from "types";
import { Button, Input } from "@nextui-org/react";

export default function Form({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // 登录逻辑
  const login = ({ email, password }: IUser) => {
    signIn("credentials", {
      redirect: false,
      email,
      password,
      // @ts-ignore
    }).then(({ error }) => {
      if (error) {
        setLoading(false);
        toast.error(error);
      } else {
        router.refresh();
        router.push("/protected");
      }
    });
  };
  // 注册逻辑
  const register = ({ email, password }: IUser) => {
    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(async (res) => {
      setLoading(false);
      if (res.status === 200) {
        toast.success("Account created! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        const { error } = await res.json();
        toast.error(error);
      }
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (type === "login") {
          login({
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
          });
        } else {
          register({
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
          });
        }
      }}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase mb-1"
        >
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          variant={"bordered"}
          placeholder="panic@thedis.co"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase mb-1"
        >
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          variant={"bordered"}
          required
        />
      </div>
      <Button type={"submit"} color="primary" isLoading={loading}>
        {type === "login" ? "Sign In" : "Sign Up"}
      </Button>
      {type === "login" ? (
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-gray-800">
            Sign up
          </Link>{" "}
          for free.
        </p>
      ) : (
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-gray-800">
            Sign in
          </Link>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
