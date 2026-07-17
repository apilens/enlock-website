import CopyPip from "../CopyPip";
import Reveal from "../Reveal";

export default function FinalCta() {
  return (
    <div className="relative overflow-clip border-t border-white/[.07] py-[120px] text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-300px] left-1/2 h-[440px] w-[800px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(52,211,153,.08), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1024px] px-6">
        <Reveal>
          <h2 className="text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.022em]">
            Put your app on tape.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-4 text-mut">
            Free, open source, MIT. Your next bug is already recorded.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-[30px] flex flex-wrap items-center justify-center gap-3">
            <CopyPip />
            <a
              href="#"
              title="Documentation — coming soon"
              className="rounded-[9px] bg-ink px-[18px] py-2.5 text-sm font-medium text-[#111] transition hover:opacity-85"
            >
              Read the docs
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
