"use client";

import { trpc } from "../_trpc-client/trpc-client";

export default function TodoList() {
  const getTodos = trpc.getTodos.useQuery();

  return (
    <div>
      <h1 className="h-12 w-full text-center">To Do List</h1>
      <ul className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {getTodos.data?.map((todo) => <li key={todo}>{todo}</li>)}
      </ul>
    </div>
  );
}
