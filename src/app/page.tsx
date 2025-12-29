import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-zinc-900">
      {/* Top bar */}
      <div className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold tracking-tight">LinkVerify</div>
          <a
            href="#audit"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            Get Free Audit
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
            Lead generation only • Manual review • 24–48h turnaround
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Stop Losing SEO &amp; Trust Because of Bad Links.
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            We manually audit your external links to find dead, risky, and
            low-quality destinations before Google—or your users—do.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#audit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white hover:opacity-90"
            >
              Get a Free 10-Link Audit
            </a>
            <a
              href="#checks"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              See what we check
            </a>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Human review. No automated fluff. Clear deliverables.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 rounded-2xl border border-zinc-200 p-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">
              Bad outbound links silently hurt performance.
            </h2>
            <p className="mt-3 leading-7 text-zinc-600">
              Broken pages, spammy destinations, and outdated references reduce
              user trust, weaken topical authority, and can trigger quality
              signals you don’t want.
            </p>
          </div>
          <ul className="space-y-3 text-zinc-700">
            <li>• “404” links across old posts and resource pages</li>
            <li>• External sites turning into spam, gambling, or malware</li>
            <li>• Thin sources that weaken credibility</li>
            <li>• Redirect chains and tracking links that slow UX</li>
          </ul>
        </div>
      </section>

      {/* What you get */}
      <section id="checks" className="mx-auto max-w-5xl px-6 py-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">What you get</h2>
          <p className="mt-3 text-zinc-600">
            We review your external links manually and deliver a clear,
            actionable report your team can implement.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Dead link detection",
              text: "Find 404s, timeouts, and soft-404s before users do.",
            },
            {
              title: "Risk screening",
              text: "Flag spam, hacked sites, and suspicious destinations.",
            },
            {
              title: "Quality grading",
              text: "Identify low-value or off-topic sources that weaken trust.",
            },
            {
              title: "Redirect cleanup",
              text: "Spot chains, unnecessary tracking, and slow destinations.",
            },
            {
              title: "Fix list per link",
              text: "Replace, remove, update, or nofollow—recommended per case.",
            },
            {
              title: "Simple deliverable",
              text: "Spreadsheet + prioritized actions you can hand off immediately.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 p-6">
          <p className="text-sm text-zinc-600">
            <span className="font-semibold text-zinc-900">Deliverable:</span>{" "}
            One spreadsheet with link-by-link issues, severity, and recommended
            fixes.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Send up to 10 URLs",
              text: "Share pages to audit (or export external links from your CMS).",
            },
            {
              step: "2",
              title: "We audit manually",
              text: "We review every external link for quality, risk, and status.",
            },
            {
              step: "3",
              title: "You get a fix plan",
              text: "Clear priorities, replacements where needed, and next steps.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold">
                {s.step}
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Typical turnaround: 24–48 hours. Rush available.
        </p>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold">Transparent pricing</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {/* Free */}
          <div className="rounded-2xl border border-zinc-200 p-6">
            <p className="text-sm font-semibold text-zinc-900">Free Audit</p>
            <p className="mt-2 text-3xl font-semibold">$0</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>• Up to 10 external links</li>
              <li>• Risk + quality flags</li>
              <li>• Recommended fixes</li>
            </ul>
            <a
              href="#audit"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white hover:opacity-90"
            >
              Get a Free 10-Link Audit
            </a>
          </div>

          {/* Standard */}
          <div className="rounded-2xl border border-zinc-200 p-6">
            <p className="text-sm font-semibold text-zinc-900">Standard Audit</p>
            <p className="mt-2 text-3xl font-semibold">$199</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>• Up to 200 external links</li>
              <li>• Prioritized fix list</li>
              <li>• Replacement suggestions</li>
            </ul>
            <a
              href="#audit"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium hover:bg-zinc-50"
            >
              Request Standard Audit
            </a>
          </div>

          {/* Ongoing */}
          <div className="rounded-2xl border border-zinc-200 p-6">
            <p className="text-sm font-semibold text-zinc-900">
              Ongoing Monitoring
            </p>
            <p className="mt-2 text-3xl font-semibold">$149</p>
            <p className="mt-1 text-sm text-zinc-500">per month</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>• Up to 500 links / month</li>
              <li>• Monthly report + alerts</li>
              <li>• Continuous cleanup recommendations</li>
            </ul>
            <a
              href="#audit"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium hover:bg-zinc-50"
            >
              Request Monitoring
            </a>
          </div>
        </div>

        <p className="mt-4 text-sm text-zinc-500">
          Implementation (editing your site) is optional and quoted separately.
        </p>
      </section>

      {/* Ideal for */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold">Best for</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Content-heavy B2B sites",
            "Agencies managing multiple blogs",
            "Resource pages and directories",
            "Sites with older content libraries (12+ months)",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-zinc-200 p-6 text-zinc-700"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Audit CTA (Fake door / lead gen) */}
      <section id="audit" className="mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-2xl border border-zinc-200 p-8">
          <h2 className="text-2xl font-semibold">
            Get a Free 10-Link Audit in 24–48 Hours
          </h2>
          <p className="mt-3 text-zinc-600">
            We’ll flag dead links, risky destinations, and low-quality sources—
            then tell you exactly what to fix.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white hover:opacity-90"
              href="mailto:hello@linkverify.io?subject=Free%2010-Link%20Audit%20Request&body=Company:%0AWebsite:%0APages%20to%20audit%20(links):%0A%0ANotes:%0A"
            >
              Request the Free Audit
            </a>
            <a
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium hover:bg-zinc-50"
              href="mailto:hello@linkverify.io?subject=Pricing%20Question%20-%20LinkVerify&body=Company:%0AWebsite:%0AQuestion:%0A"
            >
              Ask a pricing question
            </a>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            No contracts. No hype. Clear deliverables.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LinkVerify</p>
          <div className="flex gap-4">
            <a href="#audit" className="hover:text-zinc-800">
              Free Audit
            </a>
            <a href="#checks" className="hover:text-zinc-800">
              What we check
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
