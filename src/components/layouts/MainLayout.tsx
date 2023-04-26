import { useState } from "react";

import { MobileNavbar } from "../molecules/MobileNavbar";
import { MobileSidebar } from "../molecules/MobileSidebar";
import { DesktopSidebar } from "../organisms/DesktopSidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DesktopSidebar />
        <MobileNavbar setSidebarOpen={setSidebarOpen} />

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
