"use client";

import Image from "next/image";
import Link from "next/link";

const bikePackages = [
  {
    packageName: "Individual Package",
    name: "BigBoy Velocity 150cc",
    description: "Affordable weekly rentals for individual riders.",
    image: "/images/BigBoy1Cargo.jpg",
    weeklyPrice: "R700/week (base)",
    depositPrice: "R2000 deposit",
    featuresIncluded: [
      "BigBoy Velocity 150cc",
      "Helmet, USB cable, cellphone holder, crashbar, reinforced bracket & top box",
      "Optional Service Plan (+R150/week)",
      "Optional Maintenance Plan (+R150/week)",
    ],
    buttonText: "Apply Now",
    buttonLink: "/apply",
  },
  {
    packageName: "Business Package",
    name: "BigBoy Velocity 150cc",
    description:
      "For businesses or trusted individuals renting multiple bikes.",
    image: "/images/BigBoy1Cargo.jpg",
    weeklyPrice: "R700–R1000/week per bike",
    depositPrice: "R2000 deposit per bike",
    featuresIncluded: [
      "BigBoy Velocity 150cc",
      "Helmet, USB cable, cellphone holder, crashbar, reinforced bracket & top box",
      "Optional Service Plan (+R150/week)",
      "Optional Maintenance Plan (+R150/week)",
      "Discounted Service & Maintenance Plans for 5+ bikes",
    ],
    buttonText: "Apply Now",
    buttonLink: "/apply",
  },
];

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="max-w-6xl mx-auto mb-20 px-6 sm:px-8 lg:px-16 py-12"
    >
      <h2 className="text-3xl font-bold text-[#2C2F33] mb-12 text-center">
        Available Rental Packages
      </h2>

      <div className="grid gap-10 sm:grid-cols-2">
        {bikePackages.map((pkg, idx) => {
          const isBusiness = pkg.packageName === "Business Package";

          return (
            <div
              key={idx}
              className={`rounded-xl transition-transform duration-300 ease-in-out flex flex-col ${
                isBusiness
                  ? "bg-gradient-to-b from-white to-gray-800 hover:shadow-xl hover:scale-[1.02]"
                  : "bg-white border border-gray-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
              }`}
            >
              {/* Inner white card container for image + content padding */}
              <div
                className={`p-6 rounded-xl flex flex-col h-full ${
                  isBusiness ? "text-white" : "text-gray-900"
                }`}
              >
                {/* Image container remains white */}
                <div className="relative w-full h-52 mb-5 rounded-md overflow-hidden drop-shadow-sm bg-white">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-md"
                    priority={idx === 0}
                  />
                </div>

                <h3
                  className={`text-2xl font-semibold mb-3 ${
                    isBusiness ? "text-white" : "text-[#2C2F33]"
                  }`}
                >
                  {pkg.packageName}
                </h3>

                <p
                  className={`mb-5 ${
                    isBusiness ? "text-white" : "text-gray-800"
                  }`}
                >
                  {pkg.description}
                </p>

                <h4
                  className={`font-semibold text-sm mb-3 ${
                    isBusiness ? "text-white" : "text-[#2C2F33]"
                  }`}
                >
                  Included:
                </h4>

                <ul
                  className={`text-sm list-disc list-inside mb-6 space-y-1 ${
                    isBusiness ? "text-white" : "text-gray-800"
                  }`}
                  style={{ paddingLeft: 0 }}
                >
                  {pkg.featuresIncluded.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="mb-6 space-y-1">
                  <p
                    className={`text-lg font-bold ${
                      isBusiness ? "text-[#C8102E]" : "text-[#C8102E]"
                    }`}
                  >
                    {pkg.weeklyPrice}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      isBusiness ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {pkg.depositPrice}
                  </p>
                </div>

                <Link
                  href={pkg.buttonLink}
                  className={`mt-auto inline-block text-center px-6 py-3 rounded-md font-semibold transition
                    ${
                      isBusiness
                        ? "bg-gradient-to-r from-black via-[#440000] to-[#C8102E] text-white border border-transparent hover:bg-[#C8102E]"
                        : "border-2 border-[#C8102E] text-[#C8102E] hover:bg-gradient-to-r hover:from-[#C8102E] hover:via-[#A10B28] hover:to-[#7A091A] hover:text-white"
                    }
                  `}
                >
                  {pkg.buttonText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
