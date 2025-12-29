// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkVerify — Outbound Link Audit (Free 10-Link Sample)",
  description:
    "Manual outbound link audits to find broken, risky, and low-quality external links. Get a free 10-link sample audit in 24–48 hours.",
  metadataBase: new URL("https://linkverify.io"),
  openGraph: {
    title: "LinkVerify — Outbound Link Audit",
    description:
      "We manually review your external links and deliver a clear fix list. Free 10-link sample audit.",
    url: "https://linkverify.io",
    siteName: "LinkVerify",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const CTA_LINK =
  "mailto:naiof.ali92@gmail.com?subject=Free%2010-Link%20Audit%20Request%20-%20LinkVerify&body=Website:%0APages%20to%20audit%20(or%2010%20links):%0A%0AAny%20notes:";

export default function Home() {
  return (
    <main className="bg-white text-zinc-900">
      {/* Top bar */}
      <div className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold tracking-tight">LinkVerify</div>
          <a
            href={CTA_LINK}
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            Free 10-Link Audit
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
            Manual link audits • 24–48h delivery
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Fix broken &amp; risky outbound links before they hurt SEO and trust.
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            We manually review your external links and deliver a clear fix list:
            remove, replace, update, or nofollow.
          </p>

          <div className="mt-8">
            <a
              href={CTA_LINK}
              className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white hover:opacity-90"
            >
              Get a Free 10-Link Audit
            </a>
            <p className="mt-3 text-sm text-zinc-500">
              Send your website and a few pages (or up to 10 links). We reply
              within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-8 rounded-2xl border border-zinc-200 p-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">
              Outbound links decay over time.
            </h2>
            <p className="mt-3 leading-7 text-zinc-600">
              Old content accumulates dead links, redirect chains, and
              destinations that turn spammy—hurting credibility and SEO signals.
            </p>
          </div>
          <ul className="space-y-2 text-zinc-700">
            <li>• 404s and timeouts in old posts</li>
            <li>• Destinations that became spam or malware</li>
            <li>• Low-quality sources weakening trust</li>
            <li>• Redirect chains and tracking clutter</li>
          </ul>
        </div>
      </section>

      {/* Deliverable */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold">What you get</h2>
        <p className="mt-3 text-zinc-600 max-w-3xl">
          One spreadsheet with every external link, issue type, severity, and the
          recommended action.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Dead link detection (404s, timeouts)",
            "Risk screening (spam, hacked sites)",
            "Quality grading (weak or off-topic sources)",
            "Clear fix recommendation per link",
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

      {/* Pricing */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold">Pricing</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <p className="text-sm font-semibold">Free Sample</p>
            <p className="mt-2 text-3xl font-semibold">$0</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>• Up to 10 external links</li>
              <li>• Issues + recommended fixes</li>
              <li>• 24–48h delivery</li>
            </ul>
            <a
              href={CTA_LINK}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white hover:opacity-90"
            >
              Get a Free 10-Link Audit
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <p className="text-sm font-semibold">Full Audit</p>
            <p className="mt-2 text-3xl font-semibold">$199+</p>
            <p className="mt-1 text-sm text-zinc-500">one-time</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>• All external links</li>
              <li>• Prioritized fix list</li>
              <li>• Optional Loom walkthrough</li>
            </ul>
            <a
              href={CTA_LINK}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium hover:bg-zinc-50"
            >
              Request via Free Audit
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-2xl border border-zinc-200 p-8">
          <h2 className="text-2xl font-semibold">
            Get a Free 10-Link Audit
          </h2>
          <p className="mt-3 text-zinc-600">
            Send your website and pages (or a short link list). We’ll reply with
            real findings within 24–48 hours.
          </p>

          <a
            href={CTA_LINK}
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white hover:opacity-90"
          >
            Start the Free Audit
          </a>

          <p className="mt-4 text-xs text-zinc-500">
            Manual review. Clear deliverables. No contracts.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} LinkVerify
        </div>
      </footer>
    </main>
  );
}
