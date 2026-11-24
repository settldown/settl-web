import { DISTRIBUTION_DOMAIN_NAME } from "astro:env/server";

/** Full URL of a file on our CloudFront distribution, or undefined if not set. */
export function cdnUrl(file?: string): string | undefined {
  if (!file || !DISTRIBUTION_DOMAIN_NAME) return undefined;
  return `https://${DISTRIBUTION_DOMAIN_NAME}/${file}`;
}
