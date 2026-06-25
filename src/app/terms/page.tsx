import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "使用条款";
const DESCRIPTION =
  "BoxPlayer 使用条款 — 了解使用 BoxPlayer 的权利和义务。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/terms/",
    languages: {
      "zh-CN": "/terms/",
      "en-US": "/en/terms/",
      "x-default": "/terms/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/terms/`,
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
  },
};

export default function TermsZh() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-ink-100/60">
        <nav className="mx-auto max-w-3xl px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl bg-sky-100 grid place-items-center ring-1 ring-sky-200"
              aria-hidden
            >
              <Image src="/images/icons/blue.svg" alt="" width={20} height={20} />
            </div>
            <span className="font-semibold text-ink-900 tracking-tight">
              BoxPlayer
            </span>
          </Link>
          <span className="ml-auto text-sm text-ink-300">使用条款</span>
        </nav>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-3xl md:text-4xl tracking-[-0.02em] text-ink-900 mb-8">
            使用条款
          </h1>

          <p className="text-ink-500 mb-6">
            最后更新日期：{new Date().getFullYear()} 年 6 月
          </p>

          <p className="text-ink-700 mb-8 leading-relaxed">
            欢迎使用 BoxPlayer。本使用条款（以下简称&ldquo;条款&rdquo;）是
            你与 BoxPlayer 团队之间的法律协议。下载、安装或使用 BoxPlayer
            即表示你同意受本条款约束。如果你不同意，请勿使用 BoxPlayer。
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              1. 许可与使用
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              BoxPlayer 授予你有限的、非排他的、不可转让的个人使用权。你可以：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>在个人设备上安装和使用 BoxPlayer</li>
              <li>在符合 MIT 许可证的前提下使用、修改和分发 BoxPlayer 桌面版开源代码</li>
              <li>将 BoxPlayer 用于个人媒体播放和家庭影院场景</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              2. 用户责任
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              作为 BoxPlayer 用户，你同意：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>不将 BoxPlayer 用于任何非法目的或侵犯他人知识产权</li>
              <li>不反向工程、破解或绕过 BoxPlayer 的安全机制（桌面开源版除外）</li>
              <li>
                对自己连接的媒体服务器、云盘和网络共享（NFS、SMB、WebDAV 等）中的内容负责
              </li>
              <li>
                遵守你所使用的第三方服务（如 Plex、Jellyfin、Emby、阿里云盘、OneDrive
                等）的服务条款
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              3. 知识产权
            </h2>
            <p className="text-ink-700 leading-relaxed">
              BoxPlayer 桌面版（Windows / Linux）代码在 GitHub 以 MIT
              许可证开源发布。BoxPlayer 的名称、图标、UI 设计和移动端代码受版权保护。本条款不授予你任何
              BoxPlayer 商标或品牌的使用权。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              4. 免责声明
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              BoxPlayer 按&ldquo;现状&rdquo;提供，不作任何明示或默示的保证，包括但不限于适销性、特定用途适用性和不侵权的保证。我们不保证：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>BoxPlayer 满足你的特定需求</li>
              <li>服务不中断、及时、安全或无误</li>
              <li>任何错误将被纠正</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              5. 责任限制
            </h2>
            <p className="text-ink-700 leading-relaxed">
              在法律允许的最大范围内，BoxPlayer
              团队不对因使用或无法使用本软件而产生的任何直接、间接、附带、特殊或后果性损害承担责任，包括但不限于数据丢失、设备损坏或利润损失。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              6. 第三方服务
            </h2>
            <p className="text-ink-700 leading-relaxed">
              BoxPlayer 支持连接第三方服务（如 Plex、Jellyfin、Emby、阿里云盘、OneDrive
              等）。这些第三方服务有各自的服务条款和隐私政策，请在使用前仔细阅读。BoxPlayer
              不对第三方服务的内容、可用性和行为负责。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              7. 终止
            </h2>
            <p className="text-ink-700 leading-relaxed">
              如果你违反本条款，我们保留暂停或终止你使用 BoxPlayer
              的权利。你可以随时通过删除应用和账号来终止本协议。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              8. 条款变更
            </h2>
            <p className="text-ink-700 leading-relaxed">
              我们可能不时更新本条款。重大变更将通过应用内通知或邮件告知。继续使用
              BoxPlayer 即表示你接受修订后的条款。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              9. 联系我们
            </h2>
            <p className="text-ink-700 leading-relaxed">
              如对本使用条款有任何疑问，请通过{" "}
              <a
                href="mailto:boxplayer-support@proton.me"
                className="text-skype-deep hover:underline"
              >
                boxplayer-support@proton.me
              </a>{" "}
              与我们联系。
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-ink-100">
            <Link
              href="/"
              className="text-sm text-skype-deep hover:underline inline-flex items-center gap-1"
            >
              ← 返回首页
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
