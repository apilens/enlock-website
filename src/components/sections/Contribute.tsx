/* eslint-disable @next/next/no-img-element */
import Reveal from "../Reveal";
import StarCount from "../StarCount";
import { GitHubIcon, StarIcon } from "../Logo";

export default function Contribute() {
  return (
    <section id="contribute" className="border-t border-white/[.07] py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <div className="mb-4 font-mono text-xs uppercase tracking-[.14em] text-acc">
            Open source
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[560px] text-[clamp(26px,3.4vw,36px)] font-semibold leading-[1.15] tracking-[-0.022em]">
            Built in the open.
            <br />
            <span className="text-fnt">Yours to shape.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3.5 max-w-[520px] text-mut">
            slomo is MIT-licensed and early — which means your issue, PR, or
            wild idea can genuinely steer where it goes.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3.5 md:grid-cols-[1.45fr_1fr]">
          <Reveal>
            <div className="flex h-full flex-col rounded-xl border border-white/[.07] bg-panel p-[26px]">
              <div className="flex items-center gap-2.5 font-mono text-sm">
                <GitHubIcon size={16} />
                <span>
                  apilens<span className="text-fnt"> / </span>slomo
                </span>
                <a
                  href="https://github.com/apilens/slomo"
                  aria-label="GitHub stars"
                  className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/[.07] px-3 py-1 font-mono text-[12.5px] text-mut transition hover:border-white/[.13] hover:text-ink"
                >
                  <span className="text-amb">
                    <StarIcon />
                  </span>
                  <StarCount />
                </a>
              </div>
              <p className="mt-3.5 text-sm leading-relaxed text-mut">
                The recorder, the issue engine, the replay CLI — all of it in
                one repo. Issues, ideas, and PRs welcome; the roadmap (plugins,
                exporters, AI root-cause) is open for debate.
              </p>
              <div className="mt-auto flex flex-wrap gap-2.5 pt-[22px]">
                <a
                  href="https://github.com/apilens/slomo"
                  className="inline-flex items-center gap-2 rounded-[9px] bg-ink px-3.5 py-2 text-[13px] font-medium text-[#111] transition hover:opacity-85"
                >
                  <StarIcon />
                  Star on GitHub
                </a>
                <a
                  href="https://github.com/apilens/slomo/issues"
                  className="inline-flex items-center rounded-[9px] border border-white/[.13] px-3.5 py-2 text-[13px] font-medium text-mut transition hover:border-white/25 hover:text-ink"
                >
                  Open an issue
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-xl border border-white/[.07] bg-panel p-[26px]">
              <div className="flex items-center gap-3.5">
                <img
                  src="https://github.com/bhatt-neel-dev.png?size=96"
                  alt="Neel Bhatt"
                  loading="lazy"
                  className="h-11 w-11 rounded-full border border-white/[.13]"
                />
                <div className="leading-snug">
                  <b className="block text-[14.5px] font-semibold">Neel Bhatt</b>
                  <a
                    href="https://github.com/bhatt-neel-dev"
                    className="font-mono text-[12.5px] text-mut transition-colors hover:text-acc"
                  >
                    @bhatt-neel-dev
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm text-mut">
                Creator &amp; maintainer. Open to contributions of every size:
              </p>
              <div className="mt-[18px] flex flex-col gap-[9px]">
                {[
                  "bug reports & repro cases",
                  "framework integrations & exporters",
                  "docs, examples, and ideas",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-[9px] text-[13px] text-mut"
                  >
                    <span className="h-1 w-1 flex-none rounded-full bg-acc" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
