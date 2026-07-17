import Reveal from "../Reveal";

const FEATURES = [
  {
    icon: "tr",
    title: "Zero-config auto-trace",
    body: (
      <>
        Every call in your code — args, results, durations, exceptions — via{" "}
        <code className="rounded bg-white/[.05] px-1 text-ink">sys.monitoring</code>.
        Stdlib and third-party frames cost nothing.
      </>
    ),
  },
  {
    icon: "{}",
    title: "Crashes with variables",
    body: (
      <>
        Tracebacks arrive with the locals of every crashing frame — including
        worker threads and the 500s your framework swallows.
      </>
    ),
  },
  {
    icon: "⧗",
    title: "One correlated timeline",
    body: (
      <>
        SQL queries, HTTP calls, and log records land on the same timeline as
        your function calls.
      </>
    ),
  },
  {
    icon: "#",
    title: "Issues, deduplicated",
    body: (
      <>
        Crashes are fingerprinted — the same bug tomorrow is{" "}
        <code className="rounded bg-white/[.05] px-1 text-ink">occurrences += 1</code>,
        not a new alert. Category and severity are automatic.
      </>
    ),
  },
  {
    icon: "dx",
    title: "Root cause, named",
    body: (
      <>
        <code className="rounded bg-white/[.05] px-1 text-ink">slomo doctor</code>{" "}
        points at the first bad function, the first bad variable, and a
        suggested fix — with evidence.
      </>
    ),
  },
  {
    icon: "◦",
    title: "Private by construction",
    body: (
      <>
        Everything stays in{" "}
        <code className="rounded bg-white/[.05] px-1 text-ink">.slomo/</code> in
        your repo. Secrets are redacted at capture time — they never touch disk.
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <div className="mb-4 font-mono text-xs uppercase tracking-[.14em] text-acc">
            What&apos;s on the tape
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[560px] text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.022em]">
            Your app already knows why it crashed.
            <br />
            <span className="text-fnt">slomo kept the recording.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3.5 max-w-[520px] text-mut">
            Everything below is automatic after{" "}
            <code className="rounded border border-white/[.07] bg-white/[.05] px-[7px] py-px text-[.88em] text-ink">
              enable()
            </code>
            . No agents, no sidecars, no YAML.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 border-l border-t border-white/[.07] sm:grid-cols-2 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={0.05 * i}
              className="border-b border-r border-white/[.07]"
            >
              <div className="h-full px-[26px] pb-[30px] pt-7">
                <div className="mb-[18px] flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-white/[.13] bg-white/[.02] font-mono text-[13px] text-acc">
                  {f.icon}
                </div>
                <h3 className="mb-[7px] text-[15px] font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-mut">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
