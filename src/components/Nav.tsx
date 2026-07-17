"use client";

import { useEffect, useState } from "react";
import { GitHubIcon, Logo } from "./Logo";

const LINKS = [
  { href: "#demo", label: "Demo" },
  { href: "#features", label: "Features" },
  { href: "#start", label: "Get started" },
  { href: "#contribute", label: "Contribute" },
  { href: "#", label: "Docs", title: "Documentation — coming soon" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 h-[57px] backdrop-blur-[14px] transition-colors ${
        scrolled
          ? "border-b border-white/[.07] bg-bg/75"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1024px] items-center gap-7 px-6">
        <a href="#" className="flex items-center gap-[9px] font-mono text-[15px] font-medium tracking-tight">
          <Logo />
          slomo
        </a>
        <div className="ml-auto flex items-center gap-[26px]">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              title={l.title}
              className="hidden text-[13.5px] text-mut transition-colors hover:text-ink sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/apilens/slomo"
            className="flex items-center gap-[7px] rounded-lg border border-white/[.13] px-[13px] py-1.5 text-[13.5px] font-medium transition hover:border-white/25 hover:bg-white/[.03]"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
