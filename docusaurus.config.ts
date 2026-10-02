import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { sections } from "./sections";

const repoUrl = "https://github.com/mynavitechtus-anhltn2/ITFS";

const config: Config = {
  title: "ITFS",
  tagline: "ITFS Self-Learning",
  favicon: "img/favicon.png",

  future: {
    v4: true,
  },

  url: "https://mynavitechtus-anhltn2.github.io",
  baseUrl: "/ITFS/",
  organizationName: "mynavitechtus-anhltn2",
  projectName: "ITFS",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: "throw" },
  },

  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
  },

  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "vi"],
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: `${repoUrl}/edit/main/`,
          showLastUpdateTime: true,
        },
        blog: false,
        pages: false,
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "ITFS",
      logo: { alt: "ITFS logo", src: "img/logo.png" },
      items: [
        ...sections.map((section) => ({
          type: "docSidebar" as const,
          sidebarId: section.id,
          label: section.label,
          position: "left" as const,
        })),
        { type: "search", position: "right" },
        { href: repoUrl, label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "light",
      copyright: `ITFS Self-Learning · Built with Docusaurus`,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    mermaid: {
      theme: {
        light: "neutral",
        dark: "dark",
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "diff", "json", "yaml"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
