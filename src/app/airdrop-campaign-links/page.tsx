import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verified Links for Crypto Airdrop Campaigns | LinkVerify",
  description:
    "Run airdrop campaigns with one trusted link, full source tracking, and protection against fake URLs.",
};

export default function AirdropCampaignLinksPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <div className="mb-10">
        <Link href="/" className="text-sm text-zinc-600 hover:underline">
          ← Back
        </Link>
      </div>

      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Verified Links for Crypto Airdrop Campaigns
        </h1>
        <p className="text-lg text-zinc-600">
          Run airdrop campaigns with <span className="font-medium">one trusted link</span>,
          full source tracking, and protection against fake URLs.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-white hover:opacity-90"
          >
            Create verified airdrop link
          </a>
          <a
            href="#features"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 hover:bg-zinc-50"
          >
            See how it works
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          No token. No wallet connect. Just a tool.
        </p>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Airdrops fail when users don’t trust the link.</h2>
        <p className="text-zinc-700">
          Fake domains, copied links, and zero visibility into traffic sources kill participation
          and community trust. Most teams only realize it <span className="font-medium">after</span>{" "}
          the damage is done.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">LinkVerify fixes this at the link level.</h2>
        <p className="text-zinc-700">
          Create a single verified campaign link that shows users where it leads, tracks every click
          by source, and helps prevent fake or manipulated URLs.
        </p>
      </section>

      <section id="features" className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">Built for airdrop launches</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "One verified campaign link",
              text: "Use one official URL across X, Discord, Telegram, and partners.",
            },
            {
              title: "Source & referral tracking",
              text: "Know which channel or partner drives real participation.",
            },
            {
              title: "Geo visibility",
              text: "See where your airdrop traffic comes from globally.",
            },
            {
              title: "Trust-first UX",
              text: "Clean links that don’t look like scams.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-zinc-700">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Used by Web3 teams for:</h2>
        <ul className="list-disc space-y-2 pl-5 text-zinc-700">
          <li>Token airdrops</li>
          <li>Testnet reward campaigns</li>
          <li>Community growth pushes</li>
          <li>Partner & KOL distribution</li>
        </ul>
      </section>

      <section id="cta" className="mt-14 rounded-2xl border border-zinc-200 p-6">
        <h2 className="text-2xl font-semibold">Launch your next airdrop with verified links</h2>
        <p className="mt-2 text-zinc-700">
          Stop losing participation to fake URLs and messy tracking.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-white hover:opacity-90"
          >
            Create your first verified link
          </a>
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 hover:bg-zinc-50"
          >
            Book a demo
          </a>
        </div>
      </section>

      <footer className="mt-14 text-sm text-zinc-500">
        LinkVerify.io — Verified crypto campaign links & tracking.
      </footer>
    </main>
  );
}
