import { defineConfig } from "vocs";

export default defineConfig({
  title: "Mantra",
  // @dev should be set to repo name for github pages
  basePath: "/mantra-doc",
  iconUrl: { light: "/favicon.ico", dark: "/favicon.ico" },
  rootDir: "./site",
  sidebar: [
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Blog",
      link: "/blog",
    },
  ],
  theme: {
    colorScheme: "dark",
  },
});
