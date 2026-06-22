import { Terminal, Bot, Cloud, Sparkles, Workflow, Package } from "lucide-react";

const CLI_HIGHLIGHTS = [
  {
    icon: Cloud,
    title: "7 个网盘统一接口",
    body: "阿里云盘、OneDrive、Dropbox、Box、百度网盘、115 网盘、PikPak — 一套命令、一套 JSON、一套权限模型。",
  },
  {
    icon: Workflow,
    title: "三步走安全模型",
    body: "生成计划 → dry-run 校验 → 用户确认后执行,所有写操作都可追踪、可撤销(ops undo)。",
  },
  {
    icon: Sparkles,
    title: "AI 原生媒体整理",
    body: "自动识别电影、剧集、动漫,生成 Jellyfin / Emby / Plex 友好命名,网盘里的乱七八糟瞬间变媒体库。",
  },
];

const AGENT_EXAMPLES = [
  {
    prompt: "帮我看看阿里云盘里有哪些电影,统计一下数量",
    plan: [
      "auth list --json",
      "files walk --provider aliyun \\",
      "  --path <Movies> --json > files.json",
      "media scan --input files.json --json",
    ],
  },
  {
    prompt: "把阿里云盘里的剧集批量改成 Jellyfin 命名",
    plan: [
      "files walk --provider aliyun \\",
      "  --path <TV> --json > files.json",
      "media rename-plan --input files.json \\",
      "  --style jellyfin --output plan.json",
      "files rename-apply plan.json \\",
      "  --current files.json --dry-run",
      "files rename-apply plan.json \\",
      "  --current files.json   # ✅",
    ],
  },
  {
    prompt: "刚才那次重命名搞错了,撤销掉",
    plan: [
      "ops list --json",
      "ops undo <op-id> --dry-run --json",
      "ops undo <op-id>",
    ],
  },
];

export default function DeveloperCLI({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const t = lang === "en" ? { badge: "CLI · Agent", heading: <>Developer tools for <span className="italic text-skype-deep">power users</span>.</> } : { badge: "CLI · Agent", heading: <>给<span className="italic text-skype-deep">开发者</span>的工具链。</> };
  return (
    <section
      id="cli"
      aria-labelledby="cli-heading"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf" aria-hidden />
            Developer · AI Agent · MCP
          </span>
          <h2
            id="cli-heading"
            className="font-display mt-6 sm:mt-7 text-[clamp(1.875rem,6vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-ink-900 display-balance"
          >
            让 AI 帮你{" "}
            <span className="italic text-skype-deep">整理网盘</span>。
          </h2>
          <p className="mt-5 sm:mt-6 text-ink-500 text-base sm:text-lg leading-relaxed">
            BoxPlayer 把网盘自动化抽出成 <code className="font-mono text-skype-deep bg-sky-50 px-1.5 py-0.5 rounded text-[0.92em]">clouddrive-cli</code> ——
            既是给开发者的命令行工具,也是给 Claude / Codex / Cursor / 任何 MCP Agent 的稳定 API。
          </p>
        </div>

        {/* CLI highlight cards */}
        <ul
          className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 list-none"
          aria-label="clouddrive-cli 亮点"
        >
          {CLI_HIGHLIGHTS.map((h) => (
            <li key={h.title} className="card-soft p-5 sm:p-7">
              <div
                className="w-10 h-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep"
                aria-hidden
              >
                <h.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 sm:mt-5 font-semibold text-ink-900 text-base sm:text-lg">
                {h.title}
              </h3>
              <p className="mt-2 sm:mt-2.5 text-ink-500 leading-relaxed text-sm sm:text-[15px]">
                {h.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Install panels */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-5 sm:gap-6">
          {/* CLI install */}
          <div className="card-soft p-0 overflow-hidden ring-soft min-w-0">
            <header className="flex items-center gap-3 px-5 sm:px-7 pt-5 sm:pt-7">
              <div
                className="w-10 h-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep shrink-0"
                aria-hidden
              >
                <Terminal className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-ink-900 text-base sm:text-lg leading-tight">
                  Install the CLI
                </h3>
                <p className="text-xs sm:text-sm text-ink-500 mt-0.5">
                  从 npm 全局安装,5 秒搞定
                </p>
              </div>
            </header>
            <pre className="mt-4 sm:mt-5 mx-5 sm:mx-7 mb-5 sm:mb-7 bg-ink-900 text-sky-200 font-mono text-xs sm:text-sm leading-6 rounded-xl p-4 sm:p-5 overflow-x-auto">
              <code>{`npm install -g clouddrive-cli

# verify
clouddrive-cli --help
clouddrive-cli auth list --json`}</code>
            </pre>
          </div>

          {/* Skill install */}
          <div className="card-soft p-0 overflow-hidden ring-soft min-w-0">
            <header className="flex items-center gap-3 px-5 sm:px-7 pt-5 sm:pt-7">
              <div
                className="w-10 h-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep shrink-0"
                aria-hidden
              >
                <Bot className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-ink-900 text-base sm:text-lg leading-tight">
                  Install the Claude Skill
                </h3>
                <p className="text-xs sm:text-sm text-ink-500 mt-0.5">
                  让 Claude / Codex 直接驱动 CLI
                </p>
              </div>
            </header>
            <pre className="mt-4 sm:mt-5 mx-5 sm:mx-7 mb-5 sm:mb-7 bg-ink-900 text-sky-200 font-mono text-xs sm:text-sm leading-6 rounded-xl p-4 sm:p-5 overflow-x-auto">
              <code>{`# Method A — npx
npx skills add boxplayer/clouddrive-cli -g

# Method B — copy SKILL.md
cp $(npm root -g)/clouddrive-cli/skill/SKILL.md \\
   ~/.claude/skills/clouddrive-cli/SKILL.md`}</code>
            </pre>
          </div>
        </div>

        {/* Agent conversation showcase */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-skype-deep font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase">
              AI Agent in action
            </span>
            <h3 className="font-display mt-3 text-[clamp(1.375rem,4.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-ink-900 display-balance">
              说人话,Agent 来跑命令。
            </h3>
          </div>

          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 list-none">
            {AGENT_EXAMPLES.map((ex) => (
              <li
                key={ex.prompt}
                className="card-soft p-0 overflow-hidden flex flex-col min-w-0"
              >
                {/* User bubble */}
                <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-ink-100">
                  <div className="text-xs uppercase tracking-wider text-ink-300 mb-2">
                    You
                  </div>
                  <p className="text-ink-900 leading-relaxed text-sm sm:text-[15px]">
                    {ex.prompt}
                  </p>
                </div>
                {/* Agent plan */}
                <div className="px-5 sm:px-6 py-5 bg-ink-900 flex-1">
                  <div className="text-xs uppercase tracking-wider text-sky-300 mb-3 flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5" aria-hidden />
                    Agent runs
                  </div>
                  <pre className="font-mono text-xs sm:text-[13px] leading-6 text-sky-200 overflow-x-auto m-0">
                    <code>
                      {ex.plan.map((line) => `$ ${line}`).join("\n")}
                    </code>
                  </pre>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* MCP note */}
        <div className="mt-12 sm:mt-16 card-soft px-5 sm:px-7 py-5 sm:py-6 flex flex-col md:flex-row md:items-center gap-4 sm:gap-5 md:gap-8">
          <div
            className="w-12 h-12 shrink-0 rounded-xl bg-ink-900 grid place-items-center text-white"
            aria-hidden
          >
            <Package className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-ink-900">
              Native MCP server included
            </h3>
            <p className="mt-1 text-ink-500 text-sm sm:text-[15px] leading-relaxed break-words">
              <code className="font-mono text-skype-deep bg-sky-50 px-1.5 py-0.5 rounded text-[0.92em]">
                clouddrive-mcp
              </code>{" "}
              把 <code className="font-mono">files_walk</code>、
              <code className="font-mono">media_rename_plan</code>、
              <code className="font-mono">ops_undo</code> 等 17
              个工具暴露给任何 MCP 客户端 — Claude Desktop、Cursor、Codex 一行配置即用。
            </p>
          </div>
          <a
            href="https://github.com/gaozhangmin/aliyunpan/tree/main/clouddrive-cli"
            target="_blank"
            rel="noopener"
            className="btn-ghost text-sm border border-ink-100 self-start md:self-center shrink-0"
          >
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}
