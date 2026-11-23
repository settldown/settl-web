// @ts-check
import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://settlhere.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap({ filter: (page) => !page.includes("/thanks") })],
  env: {
    schema: {
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
      // CloudFront address that serves site photos, without a trailing slash.
      IMAGE_BASE_URL: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
    },
  },
});
