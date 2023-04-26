import {
  IconCalendar,
  IconChartPie,
  IconFiles,
  IconFolder,
  IconHome,
  IconUsers,
} from "@tabler/icons-react";

export const NAVIGATION_ITEMS = [
  { name: "Dashboard", href: "#", icon: IconHome, current: true },
  { name: "Team", href: "#", icon: IconUsers, current: false },
  { name: "Projects", href: "#", icon: IconFolder, current: false },
  { name: "Calendar", href: "#", icon: IconCalendar, current: false },
  { name: "Documents", href: "#", icon: IconFiles, current: false },
  { name: "Reports", href: "#", icon: IconChartPie, current: false },
];
