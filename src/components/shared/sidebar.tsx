import { User } from "lucide-react";
import Link from "next/link";
import { SidebarMenus } from "@/constants/sidebar";
import { PROFILE } from "@/constants/routes";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-90 flex h-full w-64 flex-col justify-between bg-white shadow-lg dark:bg-neutral-900">
      <nav className="mt-18 flex flex-col">
        {SidebarMenus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href as unknown as URL}
            className="flex items-center border-b border-neutral-200 px-6 py-4 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            <span className="mr-2">{menu.icon}</span>
            {menu.label}
          </Link>
        ))}
      </nav>
      <Link href={PROFILE("gatranova")} className="flex items-center border-t border-neutral-200 px-6 py-4 dark:border-neutral-700">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-700">
          <User className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
        </div>
        <h5 className="ml-3 text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Gatranova
        </h5>
      </Link>
    </aside>
  );
}