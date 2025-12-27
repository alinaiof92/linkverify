import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Verified Crypto Campaign Links
        </h1>
        <p className="text-lg text-zinc-600">
          Create trusted links for Web3 launches, airdrops, and influencer campaigns.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/airdrop-campaign-links"
            className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-white hover:opacity-90"
          >
            Airdrop campaigns
          </Link>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 hover:bg-zinc-50"
          >
            Book a demo
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          No token. No wallet connect. Just a tool.
        </p>
      </header>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold">
          Built for Web3 marketing teams
        </h2>

        <ul className="space-y-3 text-zinc-700">
          <li>• One clean, verified campaign link</li>
          <li>• Track sources and referrals</li>
          <li>• Reduce fake and copied URLs</li>
        </ul>
      </section>

      <footer className="mt-20 text-sm text-zinc-500">
        LinkVerify.io — Verified crypto campaign links & tracking.
      </footer>
    </main>
  );
}
