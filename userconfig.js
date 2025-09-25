// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Yichun",
    scale: "C",
  },
  clock: {
    format: "h:i",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://startpage.randomneet.me/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "home",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "linkding",
              url: "https://linkding.scaphium.xyz/",
              icon: "bookmarks",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "mail",
              url: "https://webmail.migadu.com",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "drive",
              url: "https://onedrive.live.com",
              icon: "brand-onedrive",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "selfhost",
          links: [
            {
              name: "homepage",
              url: "https://homepage.scaphium.xyz",
              icon: "home",
              icon_color: palette.green,
            },
            {
              name: "qbittorrent",
              url: "https://qbittorrent.scaphium.xyz",
              icon: "download",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "assist",
          links: [
            {
              name: "copilot",
              url: "https://copilot.github.com",
              icon: "brand-github-copilot",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "challanges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.green,
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "bilibili",
              url: "https://www.bilibili.com",
              icon: "brand-bilibili",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "social",
          links: [
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.green,
            },
            {
              name: "twitter",
              url: "https://www.twitter.com",
              icon: "brand-twitter",
              icon_color: palette.peach,
            },
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "game",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.green,
            },
            {
              name: "steamdb",
              url: "https://steamdb.info",
              icon: "database",
              icon_color: palette.peach,
            },
            {
              name: "isthereanydeal",
              url: "https://isthereanydeal.com",
              icon: "shopping-cart-discount",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
