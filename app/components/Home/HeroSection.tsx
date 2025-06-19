import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-5xl mx-auto mb-16 px-6 sm:px-8 lg:px-16 py-12 lg:py-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2C2F33] mb-6">
        Affordable, Legal & Ready-to-Ride Delivery Bikes
      </h1>
      <p className="text-lg text-gray-700 mb-3">
        <strong>100% Online:</strong> Apply, sign & ride — no office visits.
      </p>
      <p className="text-md text-gray-700 mb-6">
        Registered & licensed bikes ready for MR D, Uber Eats, Bolt Food & more.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="#packages"
          className="bg-[#B08D57] text-white px-6 py-3 rounded-md hover:bg-[#997447] transition w-full sm:w-auto"
        >
          View Bikes
        </Link>
        <Link
          href="/apply"
          className="bg-white border border-[#B08D57] text-[#B08D57] px-6 py-3 rounded-md hover:bg-[#F5F3EF] transition w-full sm:w-auto"
        >
          Become a Rider
        </Link>
      </div>
    </section>
  );
}
