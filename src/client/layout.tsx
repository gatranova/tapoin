"use client";

import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { AUTH_PAGES } from "@/constants/routes";
import HamburgerMenu from "@/components/ui/hamburger-menu";

export default function Auth({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAuthPage = AUTH_PAGES.some((page) => pathname.startsWith(page));

  return (
    <>
      {!isAuthPage && <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setIsOpen(false)} />}
      <main className={`flex-1 transition-all duration-300 ${isOpen ? "lg:ml-62" : "ml-0"}`}>
        {children}
      </main>
    </>
  );
}