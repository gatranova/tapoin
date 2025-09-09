import type { ReactElement } from "react";

interface Sidebar {
  href?: string;
  icon: ReactElement;
  isOpen?: boolean;
  label: string;
  onClose?: () => void;
  subMenu?: Sidebar[];
}

export { Sidebar };