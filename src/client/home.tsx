"use client";

import { Mic, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Chat } from "@/services/chat";
import dynamic from "next/dynamic";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const Map = dynamic(() => import("@/components/ui/map"), {
    loading: () => <Spinner className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2" />,
    ssr: false,
  });

  return (
    <main className="relative flex h-screen flex-col">
      <Map position={[-7.94541935, 112.614897994517]} zoom={13} />
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => Chat.submit(e, message, setLoading, setMessage)}
        className="fixed right-0 bottom-4 left-0 z-50 flex justify-center border-t border-neutral-200 p-3 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <fieldset className="flex w-full max-w-3xl items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-4 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 dark:border-neutral-700 dark:bg-neutral-800 dark:focus-within:ring-blue-700">
          <input
            type="text"
            className="flex-1 bg-transparent px-4 focus:outline-none"
            placeholder="Cari warung makanan terdekat..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" className="cursor-pointer rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-700">
            <Mic className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
          </button>
          <button type="submit" disabled={loading} className="cursor-pointer rounded-full bg-blue-500 p-3 text-white transition-all duration-300 ease-in-out hover:bg-blue-600">
            <Send className="h-4 w-4" />
          </button>
        </fieldset>
      </form>
    </main>
  );
}