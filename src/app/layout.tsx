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
const TITLE =
  "BoxPlayer — 云盘管理 · AI 智能搜索 · 4K HDR 播放器 · 全网资源聚合,Plex / Jellyfin / Emby 客户端";
const DESCRIPTION =
  "BoxPlayer 是免费开源的跨平台云盘管理器与 AI 智能搜索助手。AI Agent 一句话搜所有云盘+全网资源,AI 阅读助手,文件查重整理。同时是 4K HDR 视频播放器与媒体服务器客户端 — iOS、Apple TV、macOS / Windows / Linux,原生 Plex、Jellyfin、Emby 客户端,直连阿里云盘、百度网盘、OneDrive、Google Drive、Dropbox、115、PikPak、夸克等 10+ 网盘。支持 4K HDR10、Dolby Vision、HDR10+,适合家庭影院、私人影院、自建影音库。";

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
    // AI & cloud drive
    "AI 网盘搜索",
    "AI 智能搜索",
    "AI 文件整理",
    "AI 阅读助手",
    "网盘资源搜索",
    "全网资源搜索",
    "云盘管理",
    "云盘管理器",
    "AI Agent",
    "AI search cloud drive",
    "cloud drive manager",
    "cloud drive AI assistant",

    // 品牌
    "BoxPlayer",
    "小白羊网盘",
    "小白羊播放器",
    "xby drive",
    "BoxPlayer 下载",
    "BoxPlayer iOS",
    "BoxPlayer Mac",
    "BoxPlayer Windows",

    // 核心品类
    "视频播放器",
    "媒体播放器",
    "影视播放器",
    "免费视频播放器",
    "开源视频播放器",
    "开源媒体播放器",
    "免费开源播放器",
    "跨平台视频播放器",
    "全平台播放器",

    // 平台关键词(高搜索量)
    "iOS 播放器",
    "iPhone 视频播放器",
    "iPad 播放器",
    "iPad 4K 播放器",
    "Apple TV 播放器",
    "tvOS 播放器",
    "Apple TV 4K 播放器",
    "Mac 视频播放器",
    "macOS 播放器",
    "Apple Silicon 播放器",
    "M1 M2 M3 播放器",
    "Windows 视频播放器",
    "Windows 11 播放器",
    "Linux 视频播放器",
    "Ubuntu 播放器",
    "Android 播放器",

    // 媒体服务器客户端(高意图关键词)
    "Plex 客户端",
    "Plex 播放器",
    "Plex iOS 客户端",
    "Plex Apple TV 客户端",
    "Plex Windows 客户端",
    "Plex Linux 客户端",
    "Plex Mac 客户端",
    "Jellyfin 客户端",
    "Jellyfin 播放器",
    "Jellyfin iOS 客户端",
    "Jellyfin Apple TV 客户端",
    "Jellyfin Mac 客户端",
    "Jellyfin Windows 客户端",
    "Jellyfin Linux 客户端",
    "Emby 客户端",
    "Emby 播放器",
    "Emby iOS 客户端",
    "Emby Apple TV",
    "Emby Windows 客户端",
    "Emby Linux 客户端",
    "Kodi 替代",
    "Infuse 替代",
    "VidHub 替代",
    "VLC 替代",
    "MX Player 替代",
    "PotPlayer 替代",
    "nPlayer 替代",

    // 媒体服务器 / 自建相关(高意图长尾)
    "媒体服务器",
    "媒体服务器客户端",
    "媒体服务器播放器",
    "自建媒体服务器",
    "自建影音服务器",
    "自建影音库",
    "家庭媒体服务器",
    "私人媒体服务器",
    "Windows 媒体服务器",
    "Windows 搭建 Plex",
    "Windows 搭建 Jellyfin",
    "Windows 搭建 Emby",
    "Linux 媒体服务器",
    "Linux 搭建 Jellyfin",
    "Linux 搭建 Plex",
    "Linux 搭建 Emby",
    "Ubuntu Jellyfin",
    "Debian Jellyfin",
    "Docker Jellyfin",
    "Docker Plex",
    "Docker Emby",
    "群晖 Jellyfin",
    "群晖 Plex",
    "群晖 Emby",
    "威联通 Jellyfin",
    "Synology 媒体服务器",
    "QNAP 媒体服务器",
    "TrueNAS 媒体服务器",
    "unRAID 媒体服务器",

    // 云盘 / 网盘关键词
    "云盘播放器",
    "网盘播放器",
    "网盘视频播放器",
    "阿里云盘播放器",
    "阿里云盘 4K 播放",
    "百度网盘播放器",
    "百度网盘视频在线播放",
    "OneDrive 播放器",
    "OneDrive 视频播放",
    "Google Drive 播放器",
    "Dropbox 播放器",
    "115 网盘播放器",
    "PikPak 播放器",
    "Box 网盘播放",
    "云盘直链播放",
    "云盘原盘播放",

    // 网络协议
    "WebDAV 播放器",
    "WebDAV 视频播放",
    "SMB 播放器",
    "SMB 局域网播放",
    "SMB 共享视频",
    "NFS 播放器",
    "NFS 视频播放",
    "NFS 共享播放",
    "NFS 媒体服务器",
    "自建 NFS",
    "自建 NFS 服务器",
    "Linux 搭建 NFS",
    "Ubuntu NFS 共享",
    "群晖 NFS",
    "NAS NFS 挂载",
    "NFS vs SMB",
    "FTP 播放器",
    "FTP 视频在线播放",
    "SFTP 播放器",
    "NAS 播放器",
    "NAS 客户端",
    "局域网视频播放",
    "局域网媒体共享",
    "群晖播放器",
    "Synology 播放器",
    "QNAP 播放器",
    "威联通播放器",
    "TrueNAS 播放器",
    "unRAID 播放器",

    // 画质 / 音质 技术关键词
    "4K 播放器",
    "4K HDR 播放器",
    "8K 播放器",
    "HDR10 播放器",
    "HDR10+ 播放器",
    "Dolby Vision",
    "杜比视界播放器",
    "杜比视界 iOS",
    "杜比视界 Apple TV",
    "Dolby Atmos",
    "杜比全景声",
    "DTS-HD MA",
    "DTS:X",
    "TrueHD",
    "原盘播放器",
    "ISO 播放",
    "BDMV 播放",
    "UHD 蓝光播放",
    "蓝光原盘",
    "REMUX 播放",

    // 字幕 / 音轨
    "外挂字幕播放器",
    "ASS 字幕",
    "SRT 字幕",
    "多音轨切换",
    "字幕自动匹配",

    // 文件格式
    "MKV 播放器",
    "MP4 播放器",
    "TS 播放器",
    "M2TS 播放器",
    "AV1 播放器",
    "HEVC 播放器",
    "H.265 播放器",
    "VP9 播放器",

    // 媒体库 / 体验关键词
    "海报墙",
    "媒体库",
    "电影墙",
    "电视剧追剧",
    "番剧播放器",
    "动漫播放器",
    "TMDB 元数据",
    "刮削器",
    "私人影院",
    "家庭影院",
    "客厅影院",
    "追剧神器",
    "看片神器",

    // CLI · AI Agent 长尾(差异化卖点)
    "clouddrive-cli",
    "网盘命令行",
    "AI 整理网盘",
    "AI Agent 网盘",
    "Claude skill 网盘",
    "MCP 网盘",
    "网盘批量重命名",
    "Jellyfin 命名规范",
    "Plex 命名规范",
    "刮削命名工具",

    // 兜底通用
    "free media player",
    "open source video player",
    "cross platform media player",
    "ios video player",
    "Apple TV media player",
    "Plex client",
    "Plex client for Windows",
    "Plex client for Linux",
    "Jellyfin client",
    "Jellyfin client for Windows",
    "Jellyfin client for Linux",
    "Jellyfin client for Apple TV",
    "Emby client",
    "Emby client for Windows",
    "Emby client for Linux",
    "self hosted media server",
    "home media server",
    "media server client",
    "Dolby Vision player",
    "HDR10 player",
    "4K UHD player",
    "Aliyun Drive player",
    "OneDrive player",
    "WebDAV video player",
    "SMB video player",
    "NFS video player",
    "NFS media player",
    "NAS video player",
    "Synology media player",
    "QNAP media player",
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
      "AI Agent — natural language smart search across all cloud drives and web sources",
      "AI File Organizer — dedup, storage analysis, auto-categorization",
      "AI Reading Companion — context-aware Q&A for PDF/EPUB",
      "Text-to-Speech and Instant Translation for imported books",
      "Global web search for public cloud drive resources, one-click save to your drive",
      "TMDB + Douban movie discovery with direct cloud drive search",
      "4K HDR · Dolby Vision · HDR10+ playback",
      "Cloud direct streaming (Aliyun, OneDrive, Google Drive, Dropbox, Baidu)",
      "Native Plex, Jellyfin and Emby client on iOS, Apple TV, macOS, Windows and Linux",
      "WebDAV, SMB, NFS and FTP network shares",
      "NAS ready — Synology, QNAP, TrueNAS, unRAID",
      "Cross-device progress sync",
      "Open source (MIT)",
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
        name: "BoxPlayer 是免费的吗?需要付费订阅吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BoxPlayer 完全免费。Apple 平台(iOS、iPadOS、Apple TV、macOS)在 App Store 免费下载,Windows 与 Linux 桌面版本在 GitHub 完全开源,MIT 协议,没有付费墙、没有码率/分辨率限制、不锁字幕和音轨。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 支持哪些平台?能在 iPhone、Apple TV、Mac、Windows、Linux 上用吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "全部支持。iPhone、iPad、Apple TV 4K、MacBook、Mac mini、iMac 通过 App Store 安装;Windows 10/11 与主流 Linux 发行版(Ubuntu、Debian、Fedora、Arch)在 GitHub Release 提供 .exe、AppImage、deb、rpm 安装包。账号登录后所有设备进度、媒体库、收藏自动同步。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 可以作为 Plex / Jellyfin / Emby 客户端用吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "可以。BoxPlayer 原生实现 Plex、Jellyfin、Emby 三大主流媒体服务器协议,可以直接登录服务器拉取媒体库,支持元数据、海报墙、季度分组、观看进度同步,是 Infuse、VidHub、Kodi、VLC 的免费开源替代方案。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 支持哪些云盘和网络协议?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "国内云盘:阿里云盘、百度网盘、115 网盘、PikPak;海外云盘:OneDrive、Google Drive、Dropbox、Box;媒体服务器:Plex、Jellyfin、Emby、Kodi;NAS 协议:SMB、WebDAV、NFS、FTP。群晖 Synology、威联通 QNAP、TrueNAS、unRAID 都可以无缝接入,自建 NFS 共享也能直接挂载播放。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 可以连接 Windows / Linux 上自建的 Plex / Jellyfin / Emby 媒体服务器吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "可以。无论你的 Plex、Jellyfin 还是 Emby 服务器跑在 Windows 10/11、Ubuntu、Debian、Fedora、Arch、Docker 容器,还是群晖、威联通、TrueNAS、unRAID 上,BoxPlayer 都能通过原生协议直接登录,拉取媒体库、海报墙、季度分组与观看进度。是 Windows 媒体服务器、Linux 媒体服务器场景下 Infuse、VidHub、Kodi 的免费开源替代客户端。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 支持自建 NFS 服务器吗?如何挂载 NFS 共享视频?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "支持。BoxPlayer 内置 NFS 客户端,可直接连接 Linux(Ubuntu / Debian / CentOS / Arch)上自建的 NFS 共享,以及群晖、威联通、TrueNAS、unRAID 暴露的 NFS 挂载点。在文件源里填入 NFS 服务器地址、导出路径与挂载选项即可,4K / HDR / 原盘文件原码率直出,适合家庭影院与自建影音库场景。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 支持 4K HDR、杜比视界、Dolby Atmos 和 ISO 原盘吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "完整支持。BoxPlayer 可以播放 4K HDR10、HDR10+、Dolby Vision 杜比视界、Dolby Atmos 杜比全景声、DTS-HD MA、TrueHD,以及 ISO 原盘、BDMV、VIDEO_TS、UHD 蓝光、MKV、MP4、TS、M2TS、AV1、HEVC、H.265 等所有主流格式,REMUX 文件原码率直出。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 支持外挂字幕和多音轨吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "支持 SRT、ASS、SSA、SUB、VTT、PGS 多种字幕格式,可自动加载同名字幕,也可手动添加。多音轨自由切换 — 国语 / 粤语 / 英语 / 原声 / 评论音轨一键切换。",
        },
      },
      {
        "@type": "Question",
        name: "我怎么用 AI 帮我整理网盘?clouddrive-cli 是什么?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "clouddrive-cli 是 BoxPlayer 配套的命令行工具与 MCP 服务器,支持 7 大主流网盘统一接口。配合 Claude Code、Codex、Cursor 等 AI Agent,你可以用自然语言让 AI 自动整理网盘:扫描媒体库、按 Plex/Jellyfin 命名规范批量重命名、撤销误操作。npm install -g clouddrive-cli 即可全局安装。",
        },
      },
      {
        "@type": "Question",
        name: "BoxPlayer 与 Infuse、VidHub、Kodi、VLC 有什么区别?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BoxPlayer 是同时具备完全免费、Windows / Linux 开源、Apple 全家桶覆盖、Plex / Jellyfin / Emby 全家桶客户端、国内云盘原生直链、AI Agent 整理工具链 五项的少数选择,适合追求高质量观影同时希望工具链可掌控的用户。",
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
