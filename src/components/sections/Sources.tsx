import Image from "next/image";

const SOURCES = [
  { src: "/images/icons/icon_aliyun.svg", name: "阿里云盘", alt: "阿里云盘 logo" },
  { src: "/images/icons/icon_baidu.svg", name: "百度网盘", alt: "百度网盘 logo" },
  { src: "/images/icons/icon_googledrive.svg", name: "Google Drive", alt: "Google Drive logo" },
  { src: "/images/icons/icon_onedrive.svg", name: "OneDrive", alt: "Microsoft OneDrive logo" },
  { src: "/images/icons/icon_dropbox.svg", name: "Dropbox", alt: "Dropbox logo" },
  { src: "/images/icons/plex.svg", name: "Plex", alt: "Plex 媒体服务器 logo" },
  { src: "/images/icons/jellyfin-icon-transparent.svg", name: "Jellyfin", alt: "Jellyfin 媒体服务器 logo" },
  { src: "/images/icons/icon_emby.svg", name: "Emby", alt: "Emby 媒体服务器 logo" },
  { src: "/images/icons/icon_smb.svg", name: "SMB", alt: "SMB 网络共享协议 logo" },
  { src: "/images/icons/icon_dav.svg", name: "WebDAV", alt: "WebDAV 协议 logo" },
  { src: "/images/icons/icon_nfs.svg", name: "NFS", alt: "NFS 网络文件系统 logo" },
  { src: "/images/icons/icon_ftp.svg", name: "FTP", alt: "FTP / SFTP 协议 logo" },
];

export default function Sources({ lang = "zh" }: { lang?: "en" | "zh" }) {
  return (
    <section
      id="sources"
      aria-labelledby="sources-heading"
      className="relative py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-skype-deep font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase">
            Plays everything from anywhere
          </span>
          <h2
            id="sources-heading"
            className="font-display mt-3 sm:mt-4 text-[clamp(1.75rem,6vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ink-900 display-balance"
          >
            Your sources.{" "}
            <span className="italic text-skype-deep">All of them.</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-ink-500 text-base sm:text-lg leading-relaxed">
            媒体服务器(Plex、Jellyfin、Emby、Kodi —— 跑在 Windows / Linux / Docker / 群晖 / 威联通 / TrueNAS / unRAID 上都行)、
            NAS 与网络协议(SMB、WebDAV、NFS、FTP,自建 NFS 共享一键挂载)、
            国内云盘(阿里云盘、百度网盘、115 网盘、PikPak)、海外云盘(OneDrive、Google Drive、Dropbox、Box)
            —— 一台 BoxPlayer,全部打通。
          </p>
        </div>

        <ul
          className="mt-10 sm:mt-14 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 list-none"
          aria-label="支持的视频源、媒体服务器与 NAS 协议"
        >
          {SOURCES.map((s) => (
            <li
              key={s.name}
              className="card-soft px-3 py-4 sm:px-5 sm:py-6 flex flex-col items-center gap-2 sm:gap-3 hover:-translate-y-0.5 transition"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 grid place-items-center">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-ink-700 text-center">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
