"use client";

import { createContext, type Dispatch, type ReactNode, type SetStateAction, useContext, useState } from "react";

const SidebarContext = createContext<{ isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> } | undefined>(undefined);

function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>;
}

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
}

export { SidebarProvider, useSidebar };