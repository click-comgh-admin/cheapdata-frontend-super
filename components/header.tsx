"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Icons } from "./common/Icons";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
export type SidebarExpandedProps = {
  isSidebarExpanded: boolean;
  isMobileNavbarOpen: boolean;
  setIsSidebarExpanded: (arg: boolean) => void;
  setIsMobileNavbarOpen: (arg: boolean) => void;
};

const Header = ({
  isSidebarExpanded,
  setIsSidebarExpanded,
  setIsMobileNavbarOpen,
}: SidebarExpandedProps) => {
  return (
    <header className="dashboard-header sticky top-0 z-10 flex items-center justify-between bg-[#999999] p-4">
      <Button
        aria-expanded={isSidebarExpanded}
        aria-controls="dashboard-sidebar"
        className="hidden items-center justify-center bg-ds-primary text-black hover:bg-ds-primary lg:flex"
        size="sm"
        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
      >
        <span className="sr-only">Toggle Sidebar</span>
        <Menu />
      </Button>

      <Button
        aria-expanded={isSidebarExpanded}
        aria-controls="dashboard-sidebar"
        className="bg-[#F59300] text-black hover:bg-ds-primary lg:hidden"
        size="sm"
        onClick={() => setIsMobileNavbarOpen(true)}
      >
        <span className="sr-only">Toggle mobile nav</span>
        <Menu />
      </Button>

      <div className="flex items-center gap-10">
        <div className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-background">
          <Icons.Notification />
          <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs text-background">
            1
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="flex cursor-pointer items-center gap-5"
          >
            <div className="text-background">
              <span className="flex aspect-square h-[43px] items-center justify-center rounded-full bg-slate-950">
                SP
              </span>

              <div className="">
                <p className="text-sm leading-5">John James</p>
                <p className="text-sm leading-5">Admin</p>
              </div>
              <Icons.ArrowDown />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/dashboard/profile" className="">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
