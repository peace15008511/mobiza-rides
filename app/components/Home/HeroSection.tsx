import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#F5F3EF] via-[#fffaf5] to-[#f5f3ea] py-12 sm:py-14 lg:py-16 px-6 sm:px-8 lg:px-16 shadow-inner">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-black text-[#2C2F33] leading-tight mb-6 tracking-tight">
          <span className="text-[#B08D57]">Affordable, Legal</span> &<br />
          Ready-to-Ride Delivery Bikes
        </h1>
        <p className="text-xl sm:text-2xl text-gray-800 font-medium mb-4">
          <strong>100% Online:</strong> Apply, sign & ride — no office visits.
        </p>
        <p className="text-md sm:text-lg text-gray-700 mb-8">
          Registered & licensed bikes ready for MR D, Uber Eats, Bolt Food & more.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#packages"
            className="bg-[#B08D57] text-white px-8 py-4 rounded-lg shadow-md hover:bg-[#1E3A8A] hover:text-white hover:shadow-lg transition transform hover:scale-105 font-semibold text-lg"
          >
            View Bikes
          </Link>
          <Link
            href="/apply"
            className="bg-white border-2 border-[#B08D57] text-[#B08D57] px-8 py-4 rounded-lg shadow-md hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] hover:shadow-lg transition transform hover:scale-105 font-semibold text-lg"
          >
            Become a Rider
          </Link>
        </div>
      </div>
    </section>
  );
}
