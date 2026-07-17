import Reveal from "../Reveal";

const STEPS = [
  {
    num: "01 — install",
    title: "One package, no services",
    code: `<span class="tt-d">$</span> pip install slomo\n<span class="tt-d"># macOS</span>\n<span class="tt-d">$</span> brew install apilens/slomo/slomo`,
    note: "Python 3.12+. The recorder's hot path is stdlib-only.",
  },
  {
    num: "02 — enable",
    title: "Add one line",
    code: `<span class="tt-a">import</span> slomo\nslomo.enable()`,
    note: "Works as-is with FastAPI, Flask, asyncio, workers. More depth: @track.",
  },
  {
    num: "03 — interrogate",
    title: "Ask the tape",
    code: `<span class="tt-d">$</span> slomo issues\n<span class="tt-d">$</span> slomo doctor <span class="tt-g">ID</span>\n<span class="tt-d">$</span> slomo replay <span class="tt-g">ID</span>`,
    note: "Plus live timeline --follow, search, and exports.",
  },
];

export default function Steps() {
  return (
    <section id="start" className="border-t border-white/[.07] py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <div className="mb-4 font-mono text-xs uppercase tracking-[.14em] text-acc">
            Get started
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.022em]">
            Recording in three steps.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-9 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={0.08 * i}>
              <div className="mb-3 font-mono text-xs text-acc">{s.num}</div>
              <h3 className="mb-3 text-[15px] font-semibold tracking-tight">
                {s.title}
              </h3>
              <pre
                className="overflow-x-auto rounded-[10px] border border-white/[.07] bg-panel px-[15px] py-[13px] font-mono text-[12.5px] leading-[1.7]"
                dangerouslySetInnerHTML={{ __html: s.code }}
              />
              <p className="mt-3 text-[13px] text-mut">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
