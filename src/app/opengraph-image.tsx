import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

export const alt =
  "BoxPlayer — 跨平台 4K HDR 视频播放器,云盘直连媒体库";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(file: string) {
  const path = join(process.cwd(), "src/app/_fonts", file);
  return readFile(path);
}

export default async function OG() {
  const [loraRegular, loraSemiBold] = await Promise.all([
    loadFont("Lora-Regular.ttf"),
    loadFont("Lora-SemiBold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(180deg, #f2fafe 0%, #fafcfe 60%, #ffffff 100%)",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(143,211,247,0.6) 0%, rgba(143,211,247,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,168,240,0.18) 0%, rgba(0,168,240,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "56px 72px 0",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#e1f3fd",
              border: "1px solid #c2e6fb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "20px solid #0078c8",
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                marginLeft: 4,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#0a1b2e",
              letterSpacing: "-0.01em",
            }}
          >
            BoxPlayer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "60px 72px 0",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              background: "#f2fafe",
              border: "1px solid #c2e6fb",
              alignSelf: "flex-start",
              fontSize: 18,
              color: "#0078c8",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#6ec56a",
              }}
            />
            Cross-platform · 4K HDR · Cloud native
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 92,
              fontWeight: 600,
              color: "#0a1b2e",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              marginTop: 36,
              fontFamily: "Lora",
            }}
          >
            <span>A media player your&nbsp;</span>
            <span
              style={{
                color: "#0078c8",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              library
            </span>
            <span>&nbsp;deserves.</span>
          </div>

          <div
            style={{
              fontSize: 26,
              color: "#5b7186",
              marginTop: 24,
              lineHeight: 1.4,
              maxWidth: 980,
              display: "flex",
            }}
          >
            4K HDR · 杜比视界 · 阿里云盘 · OneDrive · Plex · Jellyfin · Emby
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "32px 72px 56px",
            borderTop: "1px solid #e5ecf2",
            margin: "0 72px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#5b7186",
            }}
          >
            iOS · Android · Apple TV · macOS · Windows
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#0078c8",
              fontWeight: 600,
            }}
          >
            xbysite.pages.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Lora", data: loraRegular, weight: 400, style: "normal" },
        { name: "Lora", data: loraSemiBold, weight: 600, style: "normal" },
      ],
    }
  );
}
