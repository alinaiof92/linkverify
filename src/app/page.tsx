// app/page.tsx (App Router)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkVerify — Outbound Link Audit (Free 10-Link Sample)",
  description:
    "Manual outbound link audits to find broken, risky, and low-quality external links. Get a free 10-link sample audit in 24–48h.",
  metadataBase: new URL("https://linkverify.io"),
  openGraph: {
    title: "LinkVerify — Outbound Link Audit",
    description:
      "We manually review your external links and deliver a clear fix list. Free 10-link sample audit in 24–48h.",
    url: "https://linkverify.io",
    siteName: "LinkVerify",
    type: "website",
  },
  robots: { index: true, follow: true },
};

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
            Free 10-Link Audit
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
            Manual review • Lead gen only • 24–48h turnaround
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Fix broken &amp; risky outbound links before they hurt SEO and trust.
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            We manually audit the external links on your site and deliver a
            prioritized fix list: remove, replace, update, or nofollow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#audit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white hover:opacity-90"
            >
              Get a Free 10-Link Audit
            </a>
            <a
              href="#deliverable"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              See deliverables
            </a>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            No subscriptions. No hype. Clear spreadsheet output.
          </p>
        </div>
      </section>

      {/* Problem + quick bullets */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-8 rounded-2xl border border-zinc-200 p-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">
              Outbound links decay. You don’t notice until it’s costly.
            </h2>
            <p className="mt-3 leading-7 text-zinc-600">
              Old content accumulates dead links, redirect chains, and
              destinations that turn spammy. That weakens credibility and can
              degrade SEO signals.
            </p>
          </div>
          <ul className="space-y-2 text-zinc-700">
            <li>• 404 / timeouts hidden in old posts</li>
            <li>• Destinations that became spam or malware</li>
            <li>• Low-quality sources hurting credibility</li>
            <li>• Redirect chains & tracking clutter</li>
          </ul>
        </div>
      </section>

      {/* Deliverable */}
      <section id="deliverable" className="mx-auto max-w-5xl px-6 py-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">What you get</h2>
          <p className="mt-3 text-zinc-600">
            One spreadsheet with every link, issue type, severity, and the
            recommended action.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Dead link detection", text: "404s, timeouts, soft-404s." },
            { title: "Risk screening", text: "Suspicious, hacked, spam destinations." },
            { title: "Quality grading", text: "Weak sources and off-topic links." },
            { title: "Fix recommendation", text: "Replace / remove / update / nofollow." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-6">
          <p className="text-sm text-zinc-600">
            <span className="font-semibold text-zinc-900">Bonus:</span> A short
            priority list (top issues first) so your team can fix fast.
          </p>
        </div>
      </section>

      {/* Pricing (simplified) */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold">Simple pricing</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <p className="text-sm font-semibold text-zinc-900">Free Sample</p>
            <p className="mt-2 text-3xl font-semibold">$0</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>• Up to 10 external links</li>
              <li>• Issues + recommended fixes</li>
              <li>• Delivered in 24–48h</li>
            </ul>
            <a
              href="#audit"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white hover:opacity-90"
            >
              Get the Free Audit
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <p className="text-sm font-semibold text-zinc-900">Full Audit</p>
            <p className="mt-2 text-3xl font-semibold">$199+</p>
            <p className="mt-1 text-sm text-zinc-500">one-time</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>• All external links (site or selected pages)</li>
              <li>• Prioritized fix list</li>
              <li>• Optional Loom walkthrough</li>
            </ul>
            <a
              href="#audit"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium hover:bg-zinc-50"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <p className="mt-4 text-sm text-zinc-500">
          Implementation is optional and quoted separately.
        </p>
      </section>

      {/* CTA */}
      <section id="audit" className="mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-2xl border border-zinc-200 p-8">
          <h2 className="text-2xl font-semibold">
            Get a Free 10-Link Audit (24–48h)
          </h2>
          <p className="mt-3 text-zinc-600">
            Send your website + a few pages (or a small list of links). We’ll
            reply with a short findings sheet and what to fix.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white hover:opacity-90"
              href="mailto:hello@linkverify.io?subject=Free%2010-Link%20Audit%20Request&body=Company:%0AWebsite:%0APages%20(or%20link%20list):%0A%0ANotes:%0A"
            >
              Request the Free Audit
            </a>
            <a
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium hover:bg-zinc-50"
              href="mailto:hello@linkverify.io?subject=LinkVerify%20Pricing%20Question&body=Company:%0AWebsite:%0AApprox.%20number%20of%20external%20links:%0AQuestion:%0A"
            >
              Ask a pricing question
            </a>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Manual review. Clear deliverables. No contracts.
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
            <a href="#deliverable" className="hover:text-zinc-800">
              Deliverable
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
