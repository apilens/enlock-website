import { Logo } from "../Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/[.07] pb-10 pt-[30px] text-[13px] text-fnt">
      <div className="mx-auto flex max-w-[1024px] flex-wrap items-center gap-4 px-6">
        <span className="flex items-center gap-2 font-mono text-[13.5px] font-medium text-ink">
          <Logo size={15} />
          slomo
        </span>
        <span>
          The black-box flight recorder for Python. Built by{" "}
          <a
            href="https://github.com/bhatt-neel-dev"
            className="text-mut underline transition-colors hover:text-ink"
          >
            Neel Bhatt
          </a>
          .
        </span>
        <div className="ml-auto flex gap-5">
          <a href="#" title="Documentation — coming soon" className="text-mut transition-colors hover:text-ink">
            Docs
          </a>
          <a href="https://github.com/apilens/slomo" className="text-mut transition-colors hover:text-ink">
            GitHub
          </a>
          <a href="https://pypi.org/project/slomo/" className="text-mut transition-colors hover:text-ink">
            PyPI
          </a>
          <a href="#contribute" className="text-mut transition-colors hover:text-ink">
            Contribute
          </a>
        </div>
      </div>
    </footer>
  );
}
