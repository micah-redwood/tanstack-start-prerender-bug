import { defineConfig } from "@tanstack/start/config";

export default defineConfig({
  // Setup static pre-rendering
  server: {
    prerender: {
      routes: ["/", "/page-1"],
      crawlLinks: true,
    },
  },
});
