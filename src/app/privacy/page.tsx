import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "隐私政策";
const DESCRIPTION =
  "BoxPlayer 隐私政策 — 了解我们如何收集、使用和保护你的个人信息。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/privacy/",
    languages: {
      "zh-CN": "/privacy/",
      "en-US": "/en/privacy/",
      "x-default": "/privacy/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacy/`,
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

export default function PrivacyZh() {
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
          <span className="ml-auto text-sm text-ink-300">隐私政策</span>
        </nav>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-3xl md:text-4xl tracking-[-0.02em] text-ink-900 mb-8">
            隐私政策
          </h1>

          <p className="text-ink-500 mb-6">
            最后更新日期：{new Date().getFullYear()} 年 6 月
          </p>

          <p className="text-ink-700 mb-8 leading-relaxed">
            BoxPlayer（以下简称&ldquo;我们&rdquo;）深知个人信息对你的重要性。本隐私政策旨在说明我们如何收集、使用、存储和保护你的个人信息。请在使用 BoxPlayer 之前仔细阅读本政策。
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              1. 我们收集的信息
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              BoxPlayer 是一款本地优先的媒体播放器。我们仅在必要范围内收集以下信息：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>
                <strong>账号信息：</strong>当你注册 BoxPlayer 账号时，我们会收集你的邮箱地址和加密后的密码，用于账号验证和跨设备同步。
              </li>
              <li>
                <strong>同步数据：</strong>观看进度、收藏列表、播放设置等数据会在你的设备之间同步，存储在我们的服务器上。
              </li>
              <li>
                <strong>设备信息：</strong>设备型号、操作系统版本、应用版本号，用于提供兼容性支持和问题排查。
              </li>
              <li>
                <strong>崩溃与诊断数据：</strong>当应用发生崩溃时，我们会收集崩溃日志以改进稳定性。你可以随时在设置中关闭此功能。
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              2. 我们不收集的信息
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              为保护你的隐私，BoxPlayer 明确不收集以下信息：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>你的媒体文件内容、播放记录明细</li>
              <li>你的云盘文件列表和文件内容</li>
              <li>你的 NAS、SMB、NFS、WebDAV 连接信息（仅存储于本地设备）</li>
              <li>你的网络流量数据</li>
              <li>你的位置信息</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              3. 信息的使用
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              我们收集的信息仅用于以下目的：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>提供跨设备同步功能</li>
              <li>改进产品稳定性和用户体验</li>
              <li>回复用户反馈和支持请求</li>
              <li>遵守法律法规要求</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              4. 信息的存储与安全
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              我们采用行业标准的安全措施保护你的个人信息，包括传输加密（TLS/HTTPS）、存储加密和访问控制。你的媒体库元数据和云盘凭证仅存储在本地设备上，不会上传至我们的服务器。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              5. 信息共享
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              我们不会将你的个人信息出售、交易或出租给第三方。仅在以下情况可能共享：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>获得你的明确授权</li>
              <li>法律、法规或政府部门要求</li>
              <li>保护 BoxPlayer 的合法权益</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              6. 你的权利
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              你有权访问、更正、删除你的个人信息，以及撤销同意和注销账号。你可以随时在应用设置中管理你的数据偏好，或通过
              <a
                href="mailto:boxplayer-support@proton.me"
                className="text-skype-deep hover:underline"
              >
                boxplayer-support@proton.me
              </a>{" "}
              联系我们。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              7. 儿童隐私
            </h2>
            <p className="text-ink-700 leading-relaxed">
              BoxPlayer 不面向 13 岁以下儿童。我们不会故意收集儿童的个人信息。如发现误收集，请立即联系我们删除。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              8. 政策更新
            </h2>
            <p className="text-ink-700 leading-relaxed">
              我们可能不时更新本隐私政策。重大变更将通过应用内通知或邮件方式告知。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              9. 联系我们
            </h2>
            <p className="text-ink-700 leading-relaxed">
              如对本隐私政策有任何疑问，请通过{" "}
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
