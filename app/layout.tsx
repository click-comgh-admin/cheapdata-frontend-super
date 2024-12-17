import type { Metadata } from "next";
import { WEBSITE_HOST_URL } from "./sitemap";


import "./globals.css";
import ReactQueryProvider from "../lib/reactQueryClient";
import { montserrat } from "@/lib/utils";

const meta = {
  title: "SUPER AKWAABA",
  description:
    "THE NEW ORIGINAL SUPER ACCOUNT FOR AKWAABA HR WEB APPLICATION SOFTWARE",
  image: `${WEBSITE_HOST_URL}/opengraph-image.jpg`,
};

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: `${meta.title} | %s`,
  },
  description: meta.description,

  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    locale: "en-US",
    siteName: meta.title,
    type: "website",
    images: [{ url: meta.image }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
