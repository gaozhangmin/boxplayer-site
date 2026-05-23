import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BoxPlayer — 跨平台 4K HDR 视频播放器",
    short_name: "BoxPlayer",
    description:
      "BoxPlayer 是跨平台视频播放器,支持 4K HDR、杜比视界、云盘直连、媒体服务器原生接入。",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fafcfe",
    theme_color: "#00a8f0",
    lang: "zh-CN",
    categories: ["entertainment", "multimedia", "video", "utilities"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
