import { useUser } from "@clerk/nextjs";
import { IconMenu2 } from "@tabler/icons-react";

import { UserButton } from "../atoms/UserButton";

export function MobileNavbar({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) {
  const { user } = useUser();

  return (
    <div className="sticky top-0 z-40 flex items-center px-4 py-4 bg-gray-900 shadow-sm gap-x-6 sm:px-6 lg:hidden">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <IconMenu2 className="w-6 h-6" aria-hidden="true" />
      </button>
      <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
      {user && (
        <>
          <UserButton />
        </>
      )}
    </div>
  );
}
