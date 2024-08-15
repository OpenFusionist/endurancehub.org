import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Endurance Hub",
  description: "Developer's Gateway to the B-Side of the Endurance Ecosystem",
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
      text: "Count me in!",
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
