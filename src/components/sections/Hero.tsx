import CopyPip from "../CopyPip";
import Starfield from "../Starfield";
import Terminal from "../Terminal";

export default function Hero() {
  return (
    <header className="relative overflow-clip pt-[110px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-340px] h-[560px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(52,211,153,.07), transparent 65%)",
        }}
      />
      <Starfield />
      <div className="relative mx-auto max-w-[1024px] px-6">
        <div className="mb-[30px] inline-flex items-center gap-2 rounded-full border border-white/[.07] bg-white/[.02] px-[13px] py-[5px] font-mono text-xs text-mut">
          <span className="h-1.5 w-1.5 rounded-full bg-acc" />
          v0.1.0 · flight recorder for Python
        </div>
        <h1 className="max-w-[700px] text-[clamp(38px,5.6vw,62px)] font-semibold leading-[1.06] tracking-[-0.028em]">
          Stop reproducing bugs.
          <br />
          <span className="text-fnt">Replay them.</span>
        </h1>
        <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-mut">
          slomo records every function call, query, and crash — locally, with
          one line. When something breaks, don&apos;t guess. Rewind the tape.
        </p>
        <div className="mt-[34px] flex flex-wrap items-center gap-3">
          <a
            href="#start"
            className="rounded-[9px] bg-ink px-[18px] py-2.5 text-sm font-medium text-[#111] transition hover:opacity-85"
          >
            Get started
          </a>
          <a
            href="#"
            title="Documentation — coming soon"
            className="rounded-[9px] border border-white/[.13] px-[18px] py-2.5 text-sm font-medium text-mut transition hover:border-white/25 hover:text-ink"
          >
            Documentation
          </a>
          <CopyPip />
        </div>
        <div className="mt-[26px] font-mono text-xs text-fnt">
          no dashboard · no docker · no account · no telemetry
        </div>
      </div>

      <div className="relative mx-auto max-w-[1024px] px-6 pb-24 pt-[72px]" id="demo">
        <Terminal />
      </div>
    </header>
  );
}
