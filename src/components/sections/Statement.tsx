import Reveal from "../Reveal";

export default function Statement() {
  return (
    <div className="border-t border-white/[.07] py-[130px] text-center">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <p className="mx-auto max-w-[680px] text-[clamp(26px,4.2vw,46px)] font-semibold leading-[1.12] tracking-[-0.025em]">
            print() is archaeology.
            <br />
            <span className="text-fnt">This is a time machine.</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 font-mono text-[13px] text-fnt">
            enable() &lt; 5ms · crash-safe JSONL · kill -9 loses one line, max
          </p>
        </Reveal>
      </div>
    </div>
  );
}
