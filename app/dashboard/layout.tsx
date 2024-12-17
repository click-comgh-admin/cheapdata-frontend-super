import DashboardLayoutClient from "./layout.client";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
