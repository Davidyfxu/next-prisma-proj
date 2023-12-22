import TodoList from "@/app/protected/components/todo-list";
import React from "react";
import SignOut from "@/components/sign-out";
export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <TodoList />
      </div>
      <SignOut />
    </div>
  );
}
