// Import the light and dark prism theme for code blocks
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// Import the remark-math plugin for rendering LaTeX math
const math = require("remark-math"); 

// The main function that creates and returns the Docusaurus config object
async function createConfig() {

  // Import and initialize the rehype-katex plugin for math rendering
  const katex = (await import("rehype-katex")).default;

  // Return the Docusaurus config object
  return {

    // Site metadata
    title: "Learn Prompting: Your Guide to Communicating with AI",
    tagline: "A Free, Open Source Course on Communicating with Artificial Intelligence",
    url: "https://learnprompting.org",
    baseUrl: "/",
    
    // Config options  
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    
    // Favicon 
    favicon: "img/favicon.ico",

    // Organization info
    organizationName: "trigaten",
    projectName: "promptgineering",

    // Deployment
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    // Internationalization 
    i18n: {
      defaultLocale: "en",
      locales: [
        "en",
        "es",
        "fr",
        "ja",
        "pt",
        "zh-Hans",
        "ko",
        "si",
        "ru",
        "ar",
        "de",
        "uk",
        "id"
      ],
    },

    // Plugins
    plugins: [

      // Client side redirects
      [
        "@docusaurus/plugin-client-redirects",
        {
          redirects: [
            // redirect rules
          ],
        },
      ],

      // Tailwind CSS plugin
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Add Tailwind CSS and Autoprefixer 
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },

      // PostHog analytics
      ["posthog-docusaurus", 
        {
          apiKey: process.env.POSTHOG_API_KEY || "DEV",
          appUrl: "https://app.posthog.com", 
          enableInDevelopment: false, 
        },
      ]
    ],

    // Presets
    presets: [
      [
        "classic",
        {
          
          // Google analytics
          gtag: {
            trackingID: "G-FV0C417KS8",
          },
          googleAnalytics: {
            trackingID: "G-FV0C417KS8",
          },

          // Docs plugin config
          docs: {

            // Admonitions
            admonitions: {
              tag: ':::',
              keywords: ['note', 'tip', 'info', 'caution', 'danger', 'takeaways'],
            },

            // Sidebar 
            sidebarPath: require.resolve("./sidebars.js"),

            // Edit URL
            editUrl: "https://github.com/trigaten/promptgineering/tree/v1.2.3",
            
            // Markdown plugins
            remarkPlugins: [
              math,
              (await import("remark-gfm")).default,
              // BibTeX
              [
                (await import("@benchmark-urbanism/remark-bibtex")).default,
                { bibtexFile: "bibliography.bib" },
              ],
              // Auto glossary
              [
                (await import("@renatonagliati/remark-auto-glossary")).default,
                { yamlFile: "glossary.yml" },
              ],
            ],

            // Math rendering 
            rehypePlugins: [[katex, { strict: false }]]
          },
          
          // Theme
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        },
      ],
    ],

    // Additional stylesheets to load
    stylesheets: [
      // KaTeX
      { 
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
        // ...
      },
      
      // Google Fonts
      {
        href: "https://fonts.googleapis.com",
        rel: "preconnect",
        async: true,
      },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossorigin: "",
        async: true,
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        async: true,
      },
    ],

    // Theme customization
    themeConfig: {

      // SEO metadata
      metadata: [
        // ...
      ],

      navbar: {
        title: "Learn Prompting",
        logo: {
          alt: "My Site Logo",
          src: "img/simple_ai.webp", 
        },
        items: [
          // Custom navbar item
          {
            type: "custom-myAwesomeNavbarItem",
            position: "left",
          },
          // Locale switcher
          {
            type: "localeDropdown",
            position: "right",
          },
          // Link to GH releases
          {
            href: "https://github.com/trigaten/Learn_Prompting/releases",
            label: "Change Log",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Learn Prompting.`,
      },
      
      // Prism theme  
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    },

    // Mermaid support
    markdown: {
      mermaid: true, 
    },

    // Themes
    themes: ["@docusaurus/theme-mermaid"],

  };
}

// Export config 
module.exports = createConfig;
