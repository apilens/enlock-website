"use client";

import { useEffect, useState } from "react";

const COMMANDS = {
  pip: "pip install slomo",
  brew: "brew install apilens/slomo/slomo",
} as const;

type Tab = keyof typeof COMMANDS;

export default function CopyPip() {
  const [tab, setTab] = useState<Tab>("pip");
  const [label, setLabel] = useState("copy");

  useEffect(() => {
    // auto-detect macOS → default to Homebrew
    const ua = navigator.userAgent || "";
    const platform =
      (navigator as { userAgentData?: { platform?: string } }).userAgentData
        ?.platform ?? navigator.platform ?? "";
    if (/mac/i.test(platform) || /Macintosh/.test(ua)) {
      const t = setTimeout(() => setTab("brew"), 0);
      return () => clearTimeout(t);
    }
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COMMANDS[tab]);
      setLabel("copied");
      setTimeout(() => setLabel("copy"), 1500);
    } catch {
      setLabel("ctrl+c");
    }
  };

  return (
    <span className="inline-flex items-center rounded-[9px] border border-white/[.07] bg-white/[.02] font-mono text-[13px]">
      <span className="flex gap-0.5 border-r border-white/[.07] p-1">
        {(Object.keys(COMMANDS) as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={`cursor-pointer rounded-md px-2.5 py-1.5 text-[12px] transition ${
              tab === t
                ? "bg-white/[.08] text-ink"
                : "text-fnt hover:text-mut"
            }`}
          >
            {t}
          </button>
        ))}
      </span>
      <button
        onClick={copy}
        aria-label={`Copy ${COMMANDS[tab]}`}
        className="inline-flex cursor-pointer items-center gap-3 px-[15px] py-2.5 text-mut transition hover:text-ink"
      >
        <span className="text-acc">$</span>
        <span>{COMMANDS[tab]}</span>
        <span className="text-[11px] text-fnt">{label}</span>
      </button>
    </span>
  );
}
