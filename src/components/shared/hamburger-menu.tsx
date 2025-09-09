"use client";

import { Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import Sidebar from "@/components/shared/sidebar";

export default function HamburgerMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 left-4 z-100 cursor-pointer rounded-md p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {isOpen && <Sidebar />}
    </>
  );
}