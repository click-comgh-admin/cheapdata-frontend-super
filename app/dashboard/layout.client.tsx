"use client";

import Header from "@/components/header";
import MobileNavbar from "@/components/mobile-navbar";
import Sidebar from "@/components/sidebar";
import useIsMounted from "@/hooks/useIsMounted";
import useMediaQuery from "@/hooks/useMediaQuery";
// import { usePathname } from "next/navigation";
import { useState } from "react";

export type SidebarExpandedProps = {
  setIsSidebarExpanded: (arg: boolean) => void;
  isSidebarExpanded: boolean;
};

export default function DashboardLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(true);
  const [isSidebarExpanded, setiIsSidebarExpanded] = useState(true);

  const { matches } = useMediaQuery("(max-width: 1024px)");
  const { isMounted } = useIsMounted();

  //   const pathname = usePathname();

  if (!isMounted) {
    return <h1>Loading ...</h1>;
  }

  //   if (!isLoggedIn) {
  //     redirect("/login");
  //   }

  return (
    <div className="dashboard-grid-container min-h-dm relative">
      <Header
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setiIsSidebarExpanded}
        isMobileNavbarOpen={isSidebarExpanded}
        setIsMobileNavbarOpen={setIsMobileNavbarOpen}
      />

      <Sidebar
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setiIsSidebarExpanded}
      />

      <main className="dashboard-main container py-6 md:py-12">{children}</main>

      {isMobileNavbarOpen && matches && (
        <MobileNavbar
          isMobileNavbarOpen={isMobileNavbarOpen}
          setIsMobileNavbarOpen={setIsMobileNavbarOpen}
        />
      )}
    </div>
  );
}
