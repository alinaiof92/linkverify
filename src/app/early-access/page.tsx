export default function EarlyAccessPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Early Access</h1>
      <p className="mt-3 text-zinc-600">
        We’re onboarding airdrop teams. Tell us where to send access.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 p-6">
        <p className="text-sm text-zinc-600">Email us with:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
          <li>Your email</li>
          <li>Project name</li>
          <li>How you run airdrops (X/Discord/Partners)</li>
        </ul>

        <a
          className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-black px-6 text-white hover:opacity-90"
          href="mailto:hello@linkverify.io?subject=Early%20Access%20-%20LinkVerify&body=Email:%0AProject:%0AChannel:%0A"
        >
          Request access
        </a>

        <p className="mt-3 text-xs text-zinc-500">
          No token. No wallet connect. Just a tool.
        </p>
      </div>
    </main>
  );
}
