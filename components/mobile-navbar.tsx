"use client";

// import { role } from "@/lib/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn, menuItems } from "@/lib/utils";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { XIcon } from "lucide-react";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";

type Props = {
  setIsMobileNavbarOpen: (arg: boolean) => void;
  isMobileNavbarOpen: boolean;
};

export default function MobileNavbar({
  setIsMobileNavbarOpen,
  isMobileNavbarOpen,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  useLockBodyScroll();

  return (
    <nav
      id="mobile-navbar"
      className="max-h-dm fixed inset-0 z-50 flex flex-col gap-10 overflow-y-auto overscroll-y-contain bg-background/95 pb-4 backdrop-blur-sm lg:hidden"
    >
      <section className="h-16 border-b bg-background">
        <div className="container flex h-full items-center justify-between">
          <button
            onClick={() => {
              router.push("/dashboard");
              setIsMobileNavbarOpen(false);
            }}
          >
            <Image src="/sidebar-logo.png" alt="logo" width={70} height={10} />
          </button>

          <button
            aria-expanded={isMobileNavbarOpen}
            aria-controls="mobile-navbar"
            className="text-ds-primary"
            onClick={() => setIsMobileNavbarOpen(false)}
          >
            <span className="sr-only">Close Mobile Navbar</span>
            <XIcon aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="px-3">
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <Accordion type="multiple">
                <ul className="flex flex-col items-stretch gap-4">
                  {item.links.map((item) => {
                    const { href, Icon, label, subCategories, isAccordion } =
                      item;
                    const matchingSubLink = subCategories?.find(
                      (subLink: { href: string }) => pathname === subLink.href,
                    );

                    return (
                      <li
                        key={label}
                        className={cn(
                          "rounded px-4 capitalize text-foreground",
                          {
                            "text-ds-primary":
                              pathname === href || matchingSubLink,
                          },
                        )}
                      >
                        {isAccordion ? (
                          <AccordionItem
                            value={label}
                            className="block border-0"
                          >
                            <AccordionTrigger
                              className={cn(
                                "py-1 text-left capitalize hover:no-underline",
                                {
                                  "text-ds-primary":
                                    pathname === href || matchingSubLink,
                                },
                              )}
                            >
                              <Icon className="block size-5" />
                              <span className="inline-block text-base leading-[18px]">
                                {label}
                              </span>
                            </AccordionTrigger>

                            <AccordionContent className="py-2 text-foreground">
                              <ul className="sub-links flex flex-col gap-2 pl-10">
                                {subCategories?.map((link: { id?: string; label: string; href: string }) => {
                                  return (
                                    <li
                                      key={'id' in link ? link.id : link.label}
                                      className="leading-0 flex items-center gap-2"
                                    >
                                      <Link
                                        onClick={() =>
                                          setIsMobileNavbarOpen(false)
                                        }
                                        href={link.href}
                                        className={cn("leading-5", {
                                          "text-ds-primary":
                                            pathname === link.href,
                                        })}
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <Link
                            onClick={() => setIsMobileNavbarOpen(false)}
                            href={href}
                            className="grid grid-cols-[auto,_1fr] items-center gap-2 py-2 text-base"
                          >
                            <Icon className="size-5" />
                            <span className="leading-[18px]">{label}</span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Accordion>
            </div>
          );
        })}
      </section>
    </nav>
  );
}
