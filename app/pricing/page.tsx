import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-brandnavy">
      {/* HERO */}
      <section className="w-full bg-brandlightpink/90">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
          <h1 className="font-display text-4xl md:text-5xl leading-tight">
            YOU READINGS · YOU PACE
            <br className="hidden md:block" />
            <span className="block mt-2">STAT FREE</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-brandnavy/80">
            Start with a <strong>free 5 day trial</strong> and discover digital Tarot and Norse Rune
            readings, plus your personal digital journal. Continue your practice with the plan that
            fits your rhythm.
          </p>
          <p className="mt-2 text-brandnavy/80">
            Choose the path that calls to you, and let the wisdom unfold.
          </p>
        </div>
      </section>

      {/* PRICING BAND */}
  <section className="w-full bg-gradient-to-b from-[#0c0f14] to-brandnavy/90">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center text-white/90">
          {/* Trial callout */}
          <div className="border border-white/80 rounded-lg p-8 md:p-10 inline-block">
            <p className="text-xl md:text-2xl">5‑Day Free Trial - Try The App Today!</p>
            <Link
              href="/signup"
              className="mt-6 inline-block px-6 py-3 rounded-md bg-brandlightpink text-brandnavy font-medium hover:opacity-90 transition"
            >
              START FREE TRIAL
            </Link>
          </div>

          {/* Plans */}
          <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            <PlanCard
              title="1 Month"
              billed= "Monthly Subscription"
              price="$3.99" //7.99
              sub={<span className="italic opacity-0">full price%</span>}
              ctaHref="/checkout?plan=monthly"
            />
            <PlanCard
              title="3 Months"
              billed= "Quarterly Subscription"
              price="$9.99" //19.99
              sub={<span className="italic opacity-80">save 17%</span>}
              ctaHref="/checkout?plan=quarterly"
            />
            <PlanCard
              title="12 Months"
              billed= "Annual Subscription"
              price="$33.99" //70.99
              sub={<span className="italic opacity-80">save 30%</span>}
              ctaHref="/checkout?plan=annual"
            />
          </div>

          <p className="mt-10 md:mt-12 text-sm text-white/80">
            Upgrades Always Available
        
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full bg-gradient-to-b from-brandlightpink to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <h2 className="text-center font-display text-3xl md:text-4xl text-brandnavy/80">
            Interactive Digital Tools
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <FeatureCard
              label="TAROT"
              copy="Personalized digital spreads to illuminate the questions on your heart."
            />
            <FeatureCard
              label="NORSE RUNES"
              copy="Ancient Norse Runes reimagined with modern insight. Cast onto cloth for context and timing."
            />
            <FeatureCard
              label="JOURNAL"
              copy="A private space to capture reflections and the story of your journey."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Subcomponents ---------- */

function PlanCard({
  title,
  billed,
  price,
  sub,
  ctaHref,
}: {
  title: string;
  billed: string;
  price: string;
  sub?: React.ReactNode;
  ctaHref: string;
}) {
  return (
    <div className="border border-white/80 rounded-md px-6 py-7 text-left mx-auto w-full max-w-sm">
      <div className="text-white">
      
        <h3 className="text-2xl font-light">{title}</h3>
        <span className="text-sm">{billed}</span>
        <div className="mt-3 text-3xl">{price}</div>
        {sub ? <div className="mt-1 text-sm">{sub}</div> : null}
        <ul className="mt-6 space-y-2 text-white/85">
          <li className="flex items-start gap-2">
            <span aria-hidden>✓</span> <span>All Features Included</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden>✓</span> <span>Cancel Anytime</span>
          </li>
        </ul>
        <Link
          href={ctaHref}
          className="mt-6 inline-block w-full text-center px-4 py-2 rounded-md bg-brandlightpink text-brandnavy font-medium hover:opacity-90 transition"
        >
          Choose Plan
        </Link>
      </div>
      </div>
    
    
  );
}

function FeatureCard({ label, copy, icon = "✨" }: { label: string; copy: string; icon?: string }) {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#151922] to-[#0f141b] text-white/90 ring-1 ring-white/10 hover:ring-white/20 transition shadow-sm p-6">
      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-transparent border border-brandnavy flex items-center justify-center text-lg text-brandnavy shadow-sm">
          <span aria-hidden>{icon}</span>
        </div>
        <div className="mt-3 tracking-widest text-xs text-xl text-white/80 font-display">{label}</div>
        <p className="mt-3 leading-relaxed">{copy}</p>
        <span className="mt-4 inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-brandnavy text-white text-sm">
          See Features <span aria-hidden>→</span>
        </span>
      </div>
    </div>
  );
}