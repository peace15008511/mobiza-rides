"use client";

export default function WhyRentWithUsSection() {
  const reasons = [
    {
      title: "Hassle-Free Ownership Path",
      desc: "No need to worry about bike paperwork, licensing, or insurance. After 2.5 years of weekly rental, you can own your ride at a minimal cost.",
    },
    {
      title: "Built for Delivery Success",
      desc: "Every bike includes essentials like a top box, crash bars, phone holder, and USB charger — ready for delivery platforms or your own operations.",
    },
    {
      title: "Flexible Plans for Growth",
      desc: "Start with one bike or scale up — choose optional service and maintenance plans as your needs evolve.",
    },
    {
      title: "Fleet Support for Businesses",
      desc: "Rent 5+ bikes and enjoy discounted plans to help keep your team on the road reliably and affordably.",
    },
    {
      title: "Simple Online Application",
      desc: "Apply online in minutes. Approval and onboarding happen digitally — no paperwork hassle.",
    },
    {
      title: "GPS Tracking & Support",
      desc: "All bikes come with GPS tracking, and our support team is here to assist when issues arise.",
    },
    {
      title: "Trusted by Professionals",
      desc: "We’re trusted by delivery drivers and business owners across SA who depend on reliable transport daily.",
    },
    {
      title: "Clear, Transparent Pricing",
      desc: "No surprise fees. What you see is what you pay, with clear add-on options if needed.",
    },
  ];

  return (
    <section
      id="why-rent"
      className="py-16 border-t border-[#D3CEC4] w-full bg-[#FDFCFB]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#2C2F33] mb-6">
          Why Rent With Us?
        </h2>
        <p className="text-[#2C2F33] text-md mb-12 max-w-2xl mx-auto">
          Whether you're an individual rider or a growing business, Mobiza Rides
          makes delivery transport easy, affordable, and rewarding.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {reasons.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isTopRow = index < 2;
            const isBottomRow = index >= 6;

            return (
              <div
                key={index}
                className={`p-8 flex items-start gap-5 ${
                  isLeft ? "border-r" : ""
                } ${!isTopRow ? "border-t" : ""} ${
                  isBottomRow ? "border-b" : ""
                } border-[#D3CEC4]`}
              >
                <div className="text-4xl font-bold text-[#C8102E] w-10">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2F33] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
