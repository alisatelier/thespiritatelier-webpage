// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import ProductCarousel from "./components/ProductCarousel";

export default function HomePage() {
  return (
    <div className="bg-brandlightpink">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-black to-brandnavy text-white py-16 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center md:text-left sm:text-center">
          <div className="md:flex md:items-center md:gap-12">
            {/* Left: text */}
            <div className="space-y-6 md:flex-1">
              <h1 className="font-display text-4xl md:text-6xl leading-tight">
                MAY YOU FIND <br />
                SPIIT HERE
              </h1>

              <div className="space-y-12 pb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Tools & Readings For Intuitive Guidance.
                </h2>
                <p className="text-lg text-white">
                  Featuring Virtual and Physical Tarot and Norse Runes,
                  <br /> Alongside a Guided Journal to Anchor Your Practice.
                </p>
              </div>

              {/* Button Container */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/pricing"
                  className="px-6 py-3 rounded-xl bg-brandpink text-black shadow hover:bg-brandnavy hover:text-white transition"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  href="/shop"
                  className="px-6 py-3 rounded-xl border border-brandpink text-brandpink hover:bg-brandnavy hover:text-white hover:border-transparent transition"
                >
                  Shop the Collection
                </Link>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative md:w-[520px] md:flex-none mt-10 md:mt-0 hidden md:block">
              <div className="relative h-[560px] overflow-hidden rounded-2xl ring-1 ring-white/20 my-8">
                <Image
                  src="/NorseRunes-Full.jpg"
                  alt="Runes, crystals, and spiritual tools arranged"
                  fill
                  sizes="520px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Features */}
      <section className="w-full bg-brandlightpink py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-brandnavy">
              Virtual Readings & Guided Journal
            </h2>
            <p className="text-lg text-gray-700">
              Tap into Tarot and Norse Rune readings from anywhere, and reflect
              on what matters most in your world with an integrated reading and
              journaling practice.
            </p>
          </div>
  

          <div className="grid gap-10 md:grid-cols-2">
            {/* Tarot & Runes */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-8 space-y-4 hover:shadow-md transition">
              <Link href="/features">
              <h3 className="text-2xl font-bold text-brandnavy">
                Tarot & Norse Rune Readings
              </h3>
              <p className="text-gray-700">
                Receive intuitive insight through personalized Tarot spreads or
                rune casting. Delivered digitally with insightful, practical
                guidance.
              </p>
              </Link>
            </div>

            {/* Digital Journal */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-8 space-y-4 hover:shadow-md transition">
              <Link href="/features">
                <h3 className="text-2xl font-bold text-brandnavy">
                  Intuitive Journal
                </h3>
                <p className="text-gray-700">
                  Capture your spreads, to-dos, and reflections in one grounded
                  space. Fully integrated with your readings.
                </p>
              </Link>
            </div>
          </div>
          
            <div className=" text-brandnavy text-4xl font-bold mt-10 text-center">
              <h1>
                Begin Your Journey Inward
              </h1>
            </div>
            <div className=" text-brandnavy font-thin text-center">
              <p>
                Sign in to receive your first virtual reading.
              </p>
              </div>
              
             <div className="flex justify-center mt-4">
              <Link
                href="/shop/tarot"
                className="inline-block mt-4 px-5 py-3 rounded-xl bg-brandnavy text-white border border-transparent hover:bg-brandlightpink hover:border-brandnavy hover:text-brandnavy transition"
              >
                Start Your Free Trial
              </Link>
          </div>
        </div>
      </section>

      {/* FEATURED / QUICK SHOP */}
      <section className="w-full py-16 px-4 md:px-8 bg-brandgrey/10">
        <div className="flex items-end justify-between mb-6 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brandnavy">
            Shop Features:
          </h2>
          <Link href="/shop" className="text-brandnavy hover:underline text-sm">
            View all →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCarousel
            title="Whims & Whispers Tarot"
            images={[
              "/Tarot-Grey-MajorArcana.jpg",
              "/Tarot-Grey-MinorArcana.jpg",
              "/Tarot-Pink-MajorArcana.jpg",
              "/Tarot-Pink-MinorArcana.jpg",
            ]}
            href="/shop/tarot"
            blurb="Insightful pulls with clear, intuitive guidance. Both Novice and Advanced readers will find their flow."
          />

          <ProductCarousel
            title="Whims & Whispers Norse Runes"
            images={[
              "/NorseRunes-BlackSilver.jpg",
              "/NorseRunes-BlackGold.jpg",
              "/NorseRunes-BlackCopper.jpg",
              "/NorseRunes-WhiteSilver.jpg",
              "/NorseRunes-WhiteGold.jpg",
              "/NorseRunes-WhiteCopper.jpg",
              "/NorseRunes-Moonrise.jpg",
              "/NorseRunes-Sunset.jpg",
            ]}
            href="/shop/runes"
            blurb="An ancient form of divination providing guidance for upcoming highlights and obstacles on your path."
          />

          <ProductCarousel
            title="Whims & Whispers Journal"
            images={[
              "/Journal-Pink-OnePage.jpg",
              "/Journal-Pink-TwoPage.jpg",
              "/Journal-Grey-OnePage.jpg",
              "/Journal-Grey-TwoPage.jpg",
            ]}
            href="/shop/journal"
            blurb="Track to-dos, spreads, and reflections in one grounded space. For those with a daily routine, or occasional journaling practice."
          />
        </div>
      </section>

      {/* AUTHOR STRIP */}
      <section className="w-full bg-gradient-to-r from-black to-brandnavy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="md:flex md:items-center md:gap-20">
            {/* Left: image */}
            <div className="relative md:w-[520px] md:flex-none mt-10 md:mt-0">
              <div className="relative h-[560px] overflow-hidden rounded-2xl ring-1 ring-white/20 my-8">
                <Image
                  src="/MIMMDI-Pretty.jpg"
                  alt="My Intuition Made Me Do It book flatlay"
                  fill
                  sizes="520px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="space-y-6 md:flex-1 text-center md:text-left sm:text-center">
              <h1 className="font-display text-4xl md:text-6xl leading-tight">
                FOLLOW <br />
                YOUR INTUITION
              </h1>

              <div className="space-y-4 pb-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  To the novel you need right now.
                </h2>
                <p>
                  {" "}
                  My Intuition Made Me Do It is a journey though self-discovery
                  and empowerment.
                </p>
              </div>

              {/*Button Container*/}

              <div className="space-y-12">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl bg-brandlightpink text-brandnavy shadow hover:bg-white hover:text-brandnavy transition"
                >
                  Explore the Story
                </Link>
              </div>

              {/* Logo below buttons */}
              <div className="pt-8 flex justify-center md:justify-start">
                <Image
                  src="/Logo.WhiteAKBird.png"
                  alt="Author A.K. Bird Logo"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-brandlightpink via-white to-brandgrey/20 p-8 md:p-10 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-brandnavy">
            Stay in the circle
          </h2>
          <p className="mt-2 text-gray-700">
            Get new readings, product drops, and journal prompts in your inbox.
          </p>
          <form className="mt-6 mx-auto max-w-md flex gap-3">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-brandnavy"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-brandnavy text-white hover:bg-brandgrey transition"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-sm text-gray-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
