import { History, Home, Settings } from "lucide-react";
import { HISTORY, HOME, SETTINGS } from "@/constants/routes";
import type { Sidebar } from "@/types/components";

export const SidebarMenus: Sidebar[] = [
  {
    href: HOME,
    icon: <Home />,
    label: "Home",
  },
  {
    href: HISTORY,
    icon: <History />,
    label: "History",
  },
  {
    href: SETTINGS,
    icon: <Settings />,
    label: "Settings",
  },
];