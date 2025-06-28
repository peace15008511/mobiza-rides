import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FDFCFB] py-12 sm:py-14 lg:py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-black text-black leading-tight mb-6 tracking-tight">
          <span className="text-[#C8102E]">Affordable, Legal</span> &<br />
          Ready-to-Ride Delivery Bikes
        </h1>

        <p className="text-xl sm:text-2xl text-black font-medium mb-4">
          <strong>100% Online:</strong> Apply, sign & ride — no office visits.
        </p>

        <p className="text-md sm:text-lg text-black/80 mb-8">
          Registered & licensed bikes ready for MR D, Uber Eats, Bolt Food &
          more.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* View Bikes - Solid Red, Hover Black Outline */}
          <Link
            href="#packages"
            className="bg-[#C8102E] text-white border-2 border-[#C8102E] px-8 py-4 rounded-lg shadow-md
              hover:bg-transparent hover:text-black hover:border-black
              transition transform hover:scale-105 font-semibold text-lg"
          >
            View bikes
          </Link>

          {/* Become a Rider - Outlined Black, Hover Solid Red */}
          <Link
            href="/apply"
            className="bg-transparent text-black border-2 border-black px-8 py-4 rounded-lg shadow-md
              hover:bg-[#C8102E] hover:text-white hover:border-[#C8102E]
              transition transform hover:scale-105 font-semibold text-lg"
          >
            Get a ride now
          </Link>
        </div>
      </div>
    </section>
  );
}
