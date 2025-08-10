export const SITE_URL = "https://cutapp.app";

export const SITE_INFO = {
  title: "CutApp",
  description:
    "A simple but powerful video editor that gets the job done. In your browser.",
  url: SITE_URL,
  openGraphImage: "/open-graph/default.jpg",
  twitterImage: "/open-graph/default.jpg",
  favicon: "/favicon.ico",
};

export const EXTERNAL_TOOLS = [
  {
    name: "Marble",
    description:
      "Modern headless CMS for content management and the blog for CutApp",
    url: "https://marblecms.com?utm_source=cutapp",
    icon: "MarbleIcon" as const,
  },
  {
    name: "Vercel",
    description: "Platform where we deploy and host CutApp",
    url: "https://vercel.com?utm_source=cutapp",
    icon: "VercelIcon" as const,
  },
  {
    name: "Databuddy",
    description: "GDPR compliant analytics and user insights for CutApp",
    url: "https://databuddy.cc?utm_source=cutapp",
    icon: "DataBuddyIcon" as const,
  },
];
