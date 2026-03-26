export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-[#dde4dc] bg-[#f9f8f6]/80 px-5 py-3 backdrop-blur-xl shadow-[0_14px_45px_-32px_rgba(37,67,42,0.85)] md:px-7 md:py-4">
        <div className="text-xl font-semibold tracking-tight text-[#315137] md:text-2xl">
          InnerCircle
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#hero" className="text-sm font-medium text-[#315137]">
            Hero
          </a>
          <a href="#mood" className="text-sm text-[#59705f] transition hover:text-[#315137]">
            Mood
          </a>
          <a href="#chat" className="text-sm text-[#59705f] transition hover:text-[#315137]">
            Chat
          </a>
          <a href="#insights" className="text-sm text-[#59705f] transition hover:text-[#315137]">
            Insights
          </a>
          <a href="#download" className="text-sm text-[#59705f] transition hover:text-[#315137]">
            Download
          </a>
        </div>

        <button className="rounded-full bg-[#446749] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_26px_-16px_rgba(68,103,73,0.95)] transition hover:-translate-y-0.5 hover:bg-[#3c5d41] md:px-6 md:py-2.5">
          Get Started
        </button>
      </nav>
    </header>
  );
}