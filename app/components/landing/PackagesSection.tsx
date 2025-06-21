'use client';

import Image from "next/image";
import Link from "next/link";

const bikePackages = [
  {
    packageName: "Starter Package",
    name: "BigBoy Velocity 150cc",
    description: "A basic package for new riders getting started.",
    image: "/images/BigBoy1Cargo.jpg",
    price: "R650/week",
    featuresIncluded: [
      "BigBoy Velocity 150cc",
      "Helmet, USB, cellphone holder, crashbar, reinforced bracket & top box",
    ],
    featuresNotIncluded: [
      "Service Plan",
      "Maintenance Plan",
    ],
    buttonText: "Apply Now",
    buttonLink: "/apply",
    color: "bg-[#F9F4EF]",
    hoverColor: "hover:shadow-lg hover:scale-[1.02]",
  },
  {
    packageName: "Pro Rider Package",
    name: "BigBoy Velocity 150cc",
    description: "Best for riders who want peace of mind with service coverage.",
    image: "/images/BigBoy1Cargo.jpg",
    price: "R950/week",
    featuresIncluded: [
      "BigBoy Velocity 150cc",
      "Helmet, USB, cellphone holder, crashbar, reinforced bracket & top box",
      "Service Plan",
    ],
    featuresNotIncluded: [
      "Maintenance Plan",
    ],
    buttonText: "Apply Now",
    buttonLink: "/apply",
    color: "bg-[#FFF9F0]",
    hoverColor: "hover:shadow-xl hover:scale-[1.02]",
  },
  {
    packageName: "Business Package",
    name: "BigBoy Velocity 150cc or 250cc",
    description: "Designed for businesses renting 3+ bikes with full maintenance.",
    image: "/images/BigBoy1Cargo.jpg",
    image2: "/images/BigBoy2Cargo.png",
    price: "R650-R1,100/week",
    featuresIncluded: [
      "BigBoy Velocity 150cc or 250cc",
      "Helmet, USB, cellphone holder, crashbar, reinforced bracket & top box",
      "Service Plan",
      "Full Maintenance Plan (repairs, wear & tear included)",
    ],
    featuresNotIncluded: [
      "Only available for 3+ bikes",
      "Rider",
    ],
    buttonText: "Contact Us",
    buttonLink: "/contact",
    color: "bg-[#EFF7F6]",
    hoverColor: "hover:shadow-2xl hover:scale-[1.02]",
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="max-w-6xl mx-auto mb-20 px-6 sm:px-8 lg:px-16 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2F33] mb-10 text-center">
        Available Rental Packages
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {bikePackages.map((pkg, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-md border border-[#D3CEC4] transition-transform duration-300 ease-in-out ${pkg.color} ${pkg.hoverColor}`}
          >
            {/* Image logic */}
            {pkg.image2 ? (
              <div className="flex gap-4 mb-4">
                {[pkg.image, pkg.image2].map((src, i) => (
                  <div key={i} className="w-1/2 h-40 relative rounded-md overflow-hidden">
                    <Image src={src} alt={`${pkg.name} ${i + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
                <Image src={pkg.image} alt={pkg.name} layout="fill" objectFit="cover" className="rounded-md" />
              </div>
            )}

            <h3 className="text-xl font-semibold text-[#2C2F33] mb-2">{pkg.packageName}</h3>
            <p className="text-gray-700 text-sm mb-4">{pkg.description}</p>

            <h4 className="font-medium text-[#2C2F33] text-sm mb-1">✅ Included:</h4>
            <ul className="text-sm text-gray-700 mb-4 list-disc list-inside space-y-1">
              {pkg.featuresIncluded.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <h4 className="font-medium text-[#2C2F33] text-sm mb-1">❌ Not Included:</h4>
            <ul className="text-sm text-gray-500 mb-4 list-disc list-inside space-y-1">
              {pkg.featuresNotIncluded.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <p className="text-lg font-semibold text-[#2C2F33] mb-4">{pkg.price}</p>

            <Link
              href={pkg.buttonLink}
              className="inline-block px-5 py-2 rounded-md bg-[#B08D57] text-white hover:bg-[#997447] transition"
            >
              {pkg.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
