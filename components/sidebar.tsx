"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, menuItems } from "@/lib/utils";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { twMerge } from "tailwind-merge";
import { SidebarExpandedProps } from "@/app/dashboard/layout.client";

export default function Sidebar({ isSidebarExpanded }: SidebarExpandedProps) {
  const pathname = usePathname();

  return (
    <aside
      id="dashboard-sidebar"
      className={twMerge(
        "dashboard-sidebar max-h-dm sticky top-0 hidden duration-100 ease-linear lg:flex",
        isSidebarExpanded ? "w-52 lg:w-60" : "w-20"
      )}
    >
      <div className="grid w-full lg:grid-rows-[auto,_1fr]">
        <Link href="/" className="mx-auto block w-max">
          <Image
            src="/sidebar-logo.png"
            alt="logo"
            width={isSidebarExpanded ? 80 : 70}
            height={22}
          />
        </Link>

        <section className="overflow-y-auto overscroll-y-contain bg-[#373B4D] p-4">
          {menuItems.map((item) => (
            <Accordion type="multiple" key={item.id}>
              <ul
                className={cn("flex flex-col items-center gap-8", {
                  "items-stretch gap-3": isSidebarExpanded,
                })}
              >
                {item.links.map(({ href, Icon, label, subCategories, isAccordion }, index) => {
                  const matchingSubLink = subCategories?.some(
                    (subLink: { href: string }) => pathname === subLink.href
                  );

                  return (
                    <li
                      key={`${label}-${index}`} // Unique key combining label and index
                      className={cn("rounded capitalize text-background", {
                        "rounded text-ds-primary after:p-2":
                          (pathname === href && !isSidebarExpanded) || matchingSubLink,
                      })}
                    >
                      {isAccordion ? (
                        <AccordionItem
                          value={label}
                          className={cn("border-0", { block: isSidebarExpanded })}
                        >
                          <div
                            className={cn("", {
                              "grid items-center": isSidebarExpanded,
                            })}
                          >
                            {/* Icon only when minimized */}
                            {!isSidebarExpanded && (
                              <button className="ml-auto">
                                <Icon className="size-5 cursor-pointer" />
                              </button>
                            )}

                            <AccordionTrigger
                              className={cn(
                                "hidden py-2 text-left font-normal capitalize hover:no-underline",
                                {
                                  flex: isSidebarExpanded,
                                  "text-ds-primary": pathname === href || matchingSubLink,
                                }
                              )}
                            >
                              <Icon className="block size-5" />
                              <span
                                className={cn("hidden text-base", {
                                  "inline-block": isSidebarExpanded,
                                })}
                              >
                                {label}
                              </span>
                            </AccordionTrigger>
                          </div>

                          <AccordionContent className="overflow-scroll py-2 text-foreground">
                            <ul
                              className={cn(
                                "sub-links hidden w-max flex-col gap-2 pl-7",
                                {
                                  flex: isSidebarExpanded,
                                }
                              )}
                            >
                              {subCategories?.map((link: { id?: string; label: string; href: string }, subIndex) => (
                                <li key={link.id ? link.id : `${link.label}-${subIndex}`}>
                                  <Link
                                    href={link.href}
                                    className={cn(
                                      "block break-all leading-5 text-background",
                                      { "text-ds-primary": pathname === link.href }
                                    )}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link
                          href={href}
                          className={cn("py-2 text-inherit", {
                            "grid grid-cols-[auto,_1fr] items-center gap-2 py-2 text-base":
                              isSidebarExpanded,
                            "text-ds-primary": isSidebarExpanded && pathname === href,
                          })}
                        >
                          <Icon className="size-5" />
                          {isSidebarExpanded && (
                            <span className="leading-[18px]">{label}</span>
                          )}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Accordion>
          ))}
        </section>
      </div>
    </aside>
  );
}
