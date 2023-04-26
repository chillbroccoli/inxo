import { useUser } from "@clerk/nextjs";
import clsx from "clsx";
import Image from "next/image";

import logo from "~/images/logo-no-background.png";
import { NAVIGATION_ITEMS } from "~/lib/constants/navigation";

import { UserButton } from "../atoms/UserButton";
import { Separator } from "../ui/separator";

export function DesktopSidebar() {
  const { user } = useUser();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex flex-col px-6 overflow-y-auto bg-primary grow gap-y-5">
        <div className="flex items-center h-16 shrink-0">
          <Image className="w-auto h-8" src={logo} alt="Your Company" />
        </div>
        <nav className="flex flex-col flex-1">
          <ul role="list" className="flex flex-col flex-1 gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={clsx(
                        item.current
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <item.icon className="w-6 h-6 shrink-0" aria-hidden="true" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {user && (
              <li className="mt-auto -mx-6">
                <Separator className="mt-4 mb-1 bg-gray-600" />

                <div className="flex items-center justify-start px-4 py-4">
                  <UserButton />
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
