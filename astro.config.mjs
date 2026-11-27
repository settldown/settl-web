// @ts-check
import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://settlhere.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap({ filter: (page) => !page.includes("/thanks") })],
  // Team photos come from our CloudFront distribution.
  image: {
    remotePatterns: [{ protocol: "https", hostname: "**.cloudfront.net" }],
  },
  env: {
    schema: {
      // CloudFront domain that serves our photos, without https://.
      DISTRIBUTION_DOMAIN_NAME: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      // Set by Vercel during the build: "production", "preview" or "development".
      VERCEL_ENV: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      // Set by Vercel: the branch's own URL, without https://.
      VERCEL_BRANCH_URL: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
    },
  },
});
