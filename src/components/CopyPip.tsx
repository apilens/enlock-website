"use client";

import { useState } from "react";

export default function CopyPip() {
  const [label, setLabel] = useState("copy");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText("pip install slomo");
      setLabel("copied");
      setTimeout(() => setLabel("copy"), 1500);
    } catch {
      setLabel("ctrl+c");
    }
  };

  return (
    <button
      onClick={copy}
      aria-label="Copy pip install command"
      className="inline-flex cursor-pointer items-center gap-3 rounded-[9px] border border-white/[.07] bg-white/[.02] px-[15px] py-2.5 font-mono text-[13px] text-mut transition hover:border-white/[.13] hover:text-ink"
    >
      <span className="text-acc">$</span>
      <span>pip install slomo</span>
      <span className="text-[11px] text-fnt">{label}</span>
    </button>
  );
}
