import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fa", "en"], // add other locales here
  defaultLocale: "fa",
  localePrefix: "as-needed",
  localeDetection: true,
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  },
});

export const { Link, redirect, getPathname, usePathname, useRouter } =
  createNavigation(routing);
