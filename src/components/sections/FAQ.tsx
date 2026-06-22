"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "BoxPlayer 是免费的吗?需要付费订阅吗?",
    a: "BoxPlayer 完全免费。Apple 平台(iOS、iPadOS、Apple TV、macOS)在 App Store 免费下载;Windows 与 Linux 桌面版本在 GitHub 完全开源,MIT 协议,没有付费墙、没有码率/分辨率限制,字幕和音轨随意切换。",
  },
  {
    q: "BoxPlayer 支持哪些平台?能在 iPhone、Apple TV、Mac、Windows、Linux 上用吗?",
    a: "全部支持。iPhone、iPad、Apple TV 4K、MacBook、Mac mini、iMac 通过 App Store 安装;Windows 10/11 与主流 Linux 发行版(Ubuntu、Debian、Fedora、Arch)在 GitHub Release 提供 .exe、AppImage、deb、rpm 安装包。账号登录后所有设备进度、媒体库、收藏自动同步。",
  },
  {
    q: "BoxPlayer 可以作为 Plex / Jellyfin / Emby 客户端用吗?",
    a: "可以。BoxPlayer 原生实现 Plex、Jellyfin、Emby 三大主流媒体服务器协议,直接登录服务器拉取媒体库,支持元数据、海报墙、季度分组、观看进度同步,是 Infuse、VidHub、Kodi、VLC 的免费开源替代方案。",
  },
  {
    q: "BoxPlayer 支持哪些云盘和网络协议?群晖 / QNAP NAS 能用吗?",
    a: "国内云盘:阿里云盘、百度网盘、115 网盘、PikPak;海外云盘:OneDrive、Google Drive、Dropbox、Box;媒体服务器:Plex、Jellyfin、Emby、Kodi;NAS 协议:SMB、WebDAV、NFS、FTP。群晖 Synology、威联通 QNAP、TrueNAS、unRAID 都可以无缝接入,自建 NFS 共享也能直接挂载播放。",
  },
  {
    q: "BoxPlayer 可以连接 Windows / Linux 自建的 Plex / Jellyfin / Emby 媒体服务器吗?",
    a: "可以。无论你的 Plex、Jellyfin 还是 Emby 服务器跑在 Windows 10/11、Ubuntu、Debian、Fedora、Arch、Docker 容器,还是群晖、威联通、TrueNAS、unRAID 上,BoxPlayer 都能通过原生协议直接登录,拉取媒体库、海报墙、季度分组与观看进度。是 Windows 媒体服务器、Linux 媒体服务器场景下 Infuse、VidHub、Kodi 的免费开源替代客户端。",
  },
  {
    q: "BoxPlayer 支持自建 NFS 服务器吗?如何挂载 NFS 共享视频?",
    a: "支持。BoxPlayer 内置 NFS 客户端,可直接连接 Linux(Ubuntu / Debian / CentOS / Arch)上自建的 NFS 共享,以及群晖、威联通、TrueNAS、unRAID 暴露的 NFS 挂载点。在文件源里填入 NFS 服务器地址、导出路径与挂载选项即可,4K / HDR / 原盘文件原码率直出,适合家庭影院与自建影音库场景。",
  },
  {
    q: "BoxPlayer 支持 4K HDR、杜比视界、Dolby Atmos 和 ISO 原盘吗?",
    a: "完整支持。可以播放 4K HDR10、HDR10+、Dolby Vision 杜比视界、Dolby Atmos 杜比全景声、DTS-HD MA、TrueHD,以及 ISO 原盘、BDMV、VIDEO_TS、UHD 蓝光、MKV、MP4、TS、M2TS、AV1、HEVC、H.265 等所有主流格式,REMUX 文件原码率直出。",
  },
  {
    q: "BoxPlayer 支持外挂字幕和多音轨吗?",
    a: "支持 SRT、ASS、SSA、SUB、VTT、PGS 多种字幕格式,可自动加载同名字幕,也可手动添加。多音轨自由切换 — 国语 / 粤语 / 英语 / 原声 / 评论音轨一键切换。",
  },
  {
    q: "怎么用 AI 帮我整理网盘?clouddrive-cli 是什么?",
    a: "clouddrive-cli 是 BoxPlayer 配套的命令行工具与 MCP 服务器,支持 7 大主流网盘统一接口。配合 Claude Code、Codex、Cursor 等 AI Agent,你可以用自然语言让 AI 自动整理网盘:扫描媒体库、按 Plex/Jellyfin 命名规范批量重命名、撤销误操作。npm install -g clouddrive-cli 即可全局安装。",
  },
  {
    q: "BoxPlayer 与 Infuse、VidHub、Kodi、VLC、PotPlayer 有什么区别?",
    a: "BoxPlayer 是同时具备 完全免费、Windows / Linux 开源、Apple 全家桶覆盖、Plex / Jellyfin / Emby 全家桶客户端、国内云盘原生直链、AI Agent 整理工具链 这五项的少数选择,适合追求高画质观影同时希望工具链可掌控的用户。",
  },
];

export default function FAQ({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const t = lang === "en" ? { title: "{t.title}", badge: "FAQ" } : { title: "{t.title}", badge: "FAQ" };
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-16 sm:py-24 md:py-32 bg-sky-50/40"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-skype-deep font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase">{t.badge}
          </span>
          <h2
            id="faq-heading"
            className="font-display mt-3 sm:mt-4 text-[clamp(1.75rem,6vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ink-900 display-balance"
          >
            {t.title}
          </h2>
          <p className="mt-4 sm:mt-5 text-ink-500 text-base sm:text-lg leading-relaxed">
            关于 BoxPlayer 视频播放器、Plex / Jellyfin / Emby 客户端、云盘直链、4K HDR、AI Agent 整理网盘的{t.title}。
          </p>
        </div>

        <ul className="mt-10 sm:mt-12 space-y-3 list-none">
          {FAQS.map((f, i) => {
            const expanded = open === i;
            return (
              <li key={f.q} className="card-soft overflow-hidden">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(expanded ? null : i)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-sky-50/40 transition"
                >
                  <span className="font-semibold text-ink-900 text-sm sm:text-[15.5px]">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-skype-deep transition-transform ${
                      expanded ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {expanded && (
                  <div
                    id={`faq-${i}`}
                    className="px-5 sm:px-6 pb-5 text-ink-500 leading-relaxed text-sm sm:text-[15px]"
                  >
                    {f.a}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
