import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://xbysite.pages.dev";
const SITE_NAME = "BoxPlayer";
const TITLE = "BoxPlayer — 跨平台 4K HDR 视频播放器,云盘直连媒体库";
const DESCRIPTION =
  "BoxPlayer 是跨平台视频播放器,支持 4K HDR · 杜比视界 · 原盘直播,一键直连阿里云盘、百度网盘、OneDrive、Plex、Jellyfin、Emby、SMB、WebDAV — iPhone、iPad、Apple TV、Mac、Windows、Android 全平台同步播放。";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafcfe" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1b2e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "BoxPlayer Team" }],
  generator: "Next.js",
  keywords: [
    "BoxPlayer",
    "小白羊网盘",
    "跨平台视频播放器",
    "4K HDR 播放器",
    "杜比视界",
    "云盘播放器",
    "阿里云盘播放",
    "百度网盘播放",
    "OneDrive 播放",
    "Google Drive 播放",
    "Plex 客户端",
    "Jellyfin 客户端",
    "Emby 客户端",
    "WebDAV 播放",
    "SMB 播放",
    "Apple TV 播放器",
    "iOS 播放器",
    "macOS 播放器",
    "Windows 播放器",
    "Android 播放器",
    "原盘播放",
    "ISO 播放",
    "Dolby Vision",
    "DTS-HD",
  ],
  referrer: "origin-when-cross-origin",
  creator: "BoxPlayer Team",
  publisher: "BoxPlayer Team",
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      "en-US": "/en/",
      "x-default": "/",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "zh-CN",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Video Player",
    operatingSystem: "iOS, iPadOS, tvOS, macOS, Windows, Linux, Android",
    description: DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/images/desktop/win-hero.png`,
    downloadUrl: [
      "https://apps.apple.com/us/app/boxplayer/id6739804060",
      "https://github.com/gaozhangmin/boxplayer/releases/latest",
    ],
    softwareHelp: {
      "@type": "CreativeWork",
      url: "https://github.com/gaozhangmin/boxplayer",
    },
    license: "https://opensource.org/licenses/MIT",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "4K HDR · Dolby Vision · HDR10+ playback",
      "Cloud direct streaming (Aliyun, OneDrive, Google Drive, Dropbox, Baidu)",
      "Native Plex, Jellyfin and Emby integration",
      "WebDAV and SMB network shares",
      "Smart media library with TMDB metadata",
      "Cross-device progress sync",
      "ISO and original disc playback",
      "Open source on Windows and Linux (MIT)",
      "AI-driven cloud library management via clouddrive-cli + MCP",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "120",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "BoxPlayer 是完全免费使用吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "目前阶段 BoxPlayer 完全免费使用,致力于打造产品和提升用户体验,欢迎反馈和提交建议。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 支持哪些平台?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BoxPlayer 支持苹果全家桶 iPhone、iPad、Apple TV、Mac,同时计划推出 Android 与 Windows 版本,跨设备同步播放进度和收藏。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 支持哪些视频源?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "支持本地文件夹、阿里云盘、百度网盘、Google Drive、OneDrive、Dropbox、Emby、Jellyfin、Plex、WebDAV、SMB 等主流影片来源。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 支持 4K HDR 和杜比视界吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "完全支持。BoxPlayer 可以播放 4K HDR10、杜比视界、ISO 原盘、VIDEO_TS 等高质量视频,同时支持 Dolby Atmos 和 DTS-HD MA 高码率音频。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 支持外挂字幕和多音轨吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "支持 SRT、ASS、SSA、SUB 等多种字幕格式,可自动加载同名字幕,也可手动添加。同时支持多音轨切换,自由选择不同语言。",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
