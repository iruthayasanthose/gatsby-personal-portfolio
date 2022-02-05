module.exports = {
  //-- SITE SETTINGS -----
  author: "@iruthayasanthose",
  siteTitle: "Iruthaya Santhose Portfolio",
  siteShortTitle: "is.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hi there! I'm Iruthaya Santhose, a design minded freelance web developer based in India.",
  siteUrl: "https://konstantin.digital",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Iruthaya Santhose", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: true, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "UA-211553483-1", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#8aa0d4", //edited
      tertiary: "#a7cffa", //edited
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#bf2000", //edited
      tertiary: "#ff3636", //edited
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/iruthaya-santhose/",
    },
    {
      name: "Sololearn",
      url: "https://www.sololearn.com/profile/15523876",
    },
    {
      name: "Github",
      url: "https://github.com/iruthayasanthose",
    },
    {
      name: "Mail",
      url: "mailto:johnsanthosh69@gmail.com",
    },
    // {
    //     name: "Behance",
    //     url: "https://www.behance.net/konstanmnster"
    // },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      useFileName: false,
      name: "Contact",
      fileName: "", // the file has to be placed inside the static folder at the root level
      url: "/#contact", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    // {
    //   name: "Imprint",
    //   url: "/imprint",
    // },
  ],
}
