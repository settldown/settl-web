import { VERCEL_BRANCH_URL, VERCEL_ENV } from "astro:env/server";
import { site } from "./site";

export type SiteEnv = "production" | "staging" | "local";

/** Which site this build is for. Only Vercel prod builds count as production. */
export const siteEnv: SiteEnv =
  VERCEL_ENV === "production"
    ? "production"
    : VERCEL_ENV === "preview"
      ? "staging"
      : "local";

/** Where the form handler sends visitors back to when JavaScript is off. */
export const siteOrigin =
  siteEnv === "production"
    ? site.url
    : VERCEL_BRANCH_URL
      ? `https://${VERCEL_BRANCH_URL}`
      : "http://localhost:4321";

export const isProduction = siteEnv === "production";
