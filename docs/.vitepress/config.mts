import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Endurance Hub",
  description: "Home is where the heart is.",
  ignoreDeadLinks: "localhostLinks",
  sitemap: {
    hostname: "https://endurancehub.org",
    lastmodDateOnly: false,
  },

  themeConfig: {
    outline: {
      level: [2, 3],
    },
    // search: {
    //   provider: "local",
    // },
    editLink: {
      pattern:
        "https://github.com/OpenFusionist/endurancehub.org/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/OpenFusionist/endurancehub.org",
      },
    ],
  },
});
