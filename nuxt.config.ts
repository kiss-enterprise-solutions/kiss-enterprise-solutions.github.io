// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        // <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        // <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        // <link rel="shortcut icon" href="/favicon.ico" />
        // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        // <meta name="apple-mobile-web-app-title" content="KISS" />
        // <link rel="manifest" href="/site.webmanifest" />
        {
          rel: "icon",
          href: "/favicon-96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          href: "/favicon.svg",
          type: "image/svg+xml",
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
      meta: [
        {
          name: "apple-mobile-web-app-title",
          content: "KISS",
        },
      ],
    },
  },
});
