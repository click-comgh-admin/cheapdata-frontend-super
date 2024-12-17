import { Icons } from "@/components/common/Icons";
import { clsx, type ClassValue } from "clsx";
import { Montserrat, Roboto, Open_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const menuItems = [
  {
    id: 1,
    links: [

    
        {
          Icon: Icons.Dashboard,
          label: "Add Super Admin",
          href: "/dashboard",
          visible: ["", ""],
          isAccordion: false,
          subCategories: [],
        },
        {
          Icon: Icons.SystemHealth,
          label: "Client Account Setup Fee",
          href: "/dashboard/client-account-setup",
          visible: ["", ""],
          isAccordion: false,
          subCategories: [],
        },
   
        {
          Icon: Icons.Eye,
          label: "Client Notifications",
          href: "/dashboard/client-notifications",
          visible: ["", ""],
          isAccordion: false,
          subCategories: [],
        },
        
        {
          Icon: Icons.ServiceModule,
          label: "Create Client Account",
          href: "/dashboard/create-client-account",
          visible: ["", ""],
          isAccordion: false,
          subCategories: [],
        },
        {
          Icon: Icons.ServiceModule,
          label: "Credit Client Account",
          href: "/dashboard/credit-client-account",
          visible: ["", ""],
          isAccordion: false,
          subCategories: [],
        },
        {
          Icon: Icons.ServiceModule,
          label: " View Client Users",
          href: "/dashboard/view-client-users",
          visible: ["", ""],
          isAccordion: false,
          subCategories: [],
        },     
      
      
    ],
  },
];

export const getRecurringMultiplier = (cycle: string) => {
  // Regular expression to extract number from "number days" format
  const daysMatch = cycle.match(/(\d+)\s*days/);

  if (daysMatch) {
    const customDays = parseFloat(daysMatch[1]); // Extract the number of days
    return customDays / 30; // Convert days to months
  }

  // Handle predefined cycles or fallback
  switch (cycle) {
    case "30 days":
      return 1; // 1 month
    case "90 days":
      return 3; // 3 months
    case "180 days":
      return 6; // 6 months
    case "365 days":
      return 12; // 12 months
    default:
      return 1; // Default to 1 month if invalid input
  }
};
