"use client";

import { useEffect, useRef, useState } from "react";

type Scene = { cmd: string; lines: string[] };

const SCENES: Scene[] = [
  {
    cmd: "python app.py",
    lines: [
      `<span class="tt-r">TypeError: 'NoneType' object is not subscriptable</span>`,
      `<span class="tt-d">app.py:14 · checkout() · recorded to .slomo/</span>`,
    ],
  },
  {
    cmd: "slomo doctor SM-8b6f710a",
    lines: [
      `<span class="tt-d">root cause  </span><span class="tt-c">inventory</span> <span class="tt-d">was</span> <span class="tt-r">None</span> <span class="tt-d">in</span> <span class="tt-g">checkout()</span>`,
      `<span class="tt-d">evidence    </span><span class="tt-bl">sql.result</span>  <span class="tt-r">0 rows</span><span class="tt-d"> — 'gadget' isn't in inventory</span>`,
      `<span class="tt-d">fix         guard the missing case at</span> <span class="tt-bl">app.py:14</span>`,
    ],
  },
  {
    cmd: "slomo replay SM-8b6f710a",
    lines: [
      `<span class="tt-d">[11/12]</span> <span class="tt-bl">return</span>  load_inventory → <span class="tt-r">None</span>   <span class="tt-d">← the smoking gun</span>`,
      `<span class="tt-d">[12/12]</span> <span class="tt-r">raise</span>   TypeError <span class="tt-d">in checkout()</span>`,
    ],
  },
];

const PROMPT = `<span class="tt-p">~/app</span> <span class="tt-g">❯</span> `;
const CURSOR = `<span class="term-cursor"></span>`;

export default function Terminal() {
  const [html, setHtml] = useState(PROMPT + CURSOR);
  const [faded, setFaded] = useState(false);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      await sleep(0);
      if (reduced) {
        const sc = SCENES[1];
        setHtml(
          `${PROMPT}<span class="tt-c">${sc.cmd}</span>\n${sc.lines.join("\n")}`
        );
        return;
      }
      while (alive.current) {
        for (const sc of SCENES) {
          if (!alive.current) return;
          setFaded(false);
          const lines: string[] = [];
          setHtml(PROMPT + CURSOR);
          await sleep(700);

          let typed = "";
          for (const ch of sc.cmd) {
            if (!alive.current) return;
            typed += ch;
            setHtml(`${PROMPT}<span class="tt-c">${typed}</span>${CURSOR}`);
            await sleep(30 + (ch.charCodeAt(0) % 3) * 14);
          }
          await sleep(260);
          lines.push(`${PROMPT}<span class="tt-c">${sc.cmd}</span>`);
          setHtml(lines.join("\n"));
          await sleep(350);

          for (const l of sc.lines) {
            if (!alive.current) return;
            lines.push(l);
            setHtml(lines.join("\n"));
            await sleep(420);
          }
          lines.push("");
          setHtml(lines.join("\n") + PROMPT + CURSOR);
          await sleep(2600);
          setFaded(true);
          await sleep(480);
        }
      }
    };
    run();

    return () => {
      alive.current = false;
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-white/[.07] bg-panel shadow-[0_30px_80px_-40px_rgba(0,0,0,.9)]">
      <div className="flex items-center gap-[7px] border-b border-white/[.07] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/[.09]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/[.09]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/[.09]" />
        <span className="mx-auto -translate-x-[18px] font-mono text-[11.5px] text-fnt">
          demo — one bug, three commands
        </span>
      </div>
      <div
        className={`min-h-[240px] overflow-x-auto whitespace-pre-wrap break-words px-[30px] py-[26px] font-mono text-[13.5px] leading-[1.9] transition-opacity duration-[450ms] ${
          faded ? "opacity-0" : "opacity-100"
        }`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
