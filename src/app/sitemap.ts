import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://xbysite.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "zh-CN": `${SITE_URL}/`,
          "en-US": `${SITE_URL}/en/`,
          "x-default": `${SITE_URL}/`,
        },
      },
    },
    {
      url: `${SITE_URL}/en/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          "en-US": `${SITE_URL}/en/`,
          "zh-CN": `${SITE_URL}/`,
          "x-default": `${SITE_URL}/`,
        },
      },
    },
    {
      url: `${SITE_URL}/#features`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#showcase`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#sources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#opensource`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/#cli`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/#download`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
