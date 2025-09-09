"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { AUTH_PAGES } from "@/constants/routes";
import { SidebarProvider, useSidebar } from "@/context/sidebar";
import HamburgerMenu from "@/components/shared/hamburger-menu";

function LayoutContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebar();
  const isAuthPage = AUTH_PAGES.some((page) => pathname.startsWith(page));

  return (
    <>
      {!isAuthPage && <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setIsOpen(false)} />}
      <main className="flex-1 transition-all duration-300">
        {children}
      </main>
    </>
  );
}

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}