import { ArrowRight, Building2, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface-950 text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-brand-500 shadow-glow-brand">
            <Building2 className="size-5 text-white" aria-hidden="true" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">Smart Resort 360</span>
        </div>
        <span className="hidden rounded-full border border-surface-600 bg-surface-900 px-4 py-2 text-sm text-slate-300 sm:inline-flex">
          Resort intelligence, reimagined
        </span>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col justify-center px-6 pb-20 pt-12 lg:px-8 lg:pt-0">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-sm text-accent-300">
            <Sparkles className="size-4" aria-hidden="true" />
            <span>Welcome to the future of hospitality</span>
          </div>
          <h1 className="font-display text-balance text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
            Every stay, <span className="text-brand-400">smarter.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-slate-400 sm:text-xl">
            Smart Resort 360 brings operations, guest experience, and insights together in one intelligent platform built for modern resorts.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#overview" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 font-medium text-white transition-colors hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
              Explore the platform
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#overview" className="inline-flex items-center justify-center rounded-xl border border-surface-600 px-6 py-3.5 font-medium text-slate-200 transition-colors hover:border-slate-400 hover:bg-surface-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
              See what&apos;s included
            </a>
          </div>
        </div>

        <div id="overview" className="mt-24 grid gap-4 border-t border-surface-700 pt-8 sm:grid-cols-3">
          {[
            ["One connected view", "See the full resort operation at a glance."],
            ["Guest-first workflows", "Turn every touchpoint into a memorable stay."],
            ["Decisions with clarity", "Use real-time insight to move with confidence."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-surface-700 bg-surface-900/70 p-6">
              <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
