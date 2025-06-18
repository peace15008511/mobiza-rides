import Header from "./components/Header";
import Footer from "./components/Footer";
import ReviewSlider from "components/ReviewSlider";
import Link from "next/link";
import Image from "next/image";

import {
  Bike,
  ClipboardList,
  CreditCard,
  Truck,
  Verified,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Home() {
  const bikePackages = [
    {
      packageName: "Starter Package",
      name: "BigBoy Velocity 150cc",
      description: "Perfect for new riders starting delivery work.",
      image: "/images/BigBoy1Cargo.jpg",
      price: "R650/week",
      features: [
        "BigBoy Velocity 150cc",
        "Fully licensed & ready for delivery",
        "1-month flexible renewable contract",
        "No Service and maintenance plan",
        "Bike settles after 1.5 years of consistent payment",
      ],
      buttonText: "Apply Now",
      buttonLink: "/apply",
      buttonStyle: "bg-[#B08D57] text-white",
      borderStyle: "border border-[#D3CEC4]",
      highlight: false,
    },
    {
      packageName: "Pro Rider Package",
      name: "BigBoy Velocity 150cc",
      description: "Ideal for full-time drivers with service plan included.",
      image: "/images/BigBoy1Cargo.jpg",
      price: "R950/week",
      features: [
        "BigBoy Velocity 150cc",
        "Includes routine servicing costs",
        "Fully licensed & registered",
        "Bike settles after 1.5 years of consistent payments",
        "Service Plan included",
      ],
      buttonText: "Apply Now",
      buttonLink: "/apply",
      buttonStyle: "bg-[#B08D57] text-white",
      borderStyle: "border-2 border-[#B08D57]",
      highlight: false,
    },
    {
      packageName: "Business Package",
      name: "BigBoy Velocity 150cc or 250cc",
      description:
        "Best for shops/teams renting 3+ bikes with full maintenance plan.",
      image: "/images/BigBoy1Cargo.jpg",
      image2: "/images/BigBoy2Cargo.png",
      price: "R650–R1,100/week",
      features: [
        "150cc or 250cc available",
        "Includes full maintenance coverage",
        "Custom pricing for 3+ bikes",
        "Bike settles after 1.5 years of consistent payments",
      ],
      buttonText: "Contact Us",
      buttonLink: "/contact",
      buttonStyle: "bg-white border border-[#B08D57] text-[#B08D57]",
      borderStyle: "border border-[#D3CEC4]",
      highlight: false,
    },
  ];

  const steps = [
    {
      title: "Apply Online",
      icon: ClipboardList,
      desc: "Fill in your details and choose your preferred bike.",
    },
    {
      title: "Get Approved",
      icon: Verified,
      desc: "We review your info quickly — no paperwork delays.",
    },
    {
      title: "Make Payment",
      icon: CreditCard,
      desc: "Securely pay online once you're approved.",
    },
    {
      title: "We Deliver",
      icon: Truck,
      desc: "Bike delivered to your location — ready to ride.",
    },
    {
      title: "Start Delivering",
      icon: Bike,
      desc: "Get on the road and start earning with your new ride.",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-40 bg-[#F5F3EF] px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24 lg:pb-36 text-center">
        {/* Hero */}
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

        {/* About Us */}
        <section
          id="about-us"
          className="max-w-4xl mx-auto mb-20 px-6 sm:px-8 lg:px-16 py-16 bg-white rounded-xl shadow-md border border-[#D3CEC4] text-center"
        >
          <h2 className="text-3xl font-bold text-[#2C2F33] mb-6">About Mobiza Rides</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            At Mobiza Rides, we empower delivery riders by providing affordable,
            fully licensed bikes ready to hit the road. Our seamless 100% online
            application process ensures you can get started quickly, legally, and
            confidently — no office visits or complicated paperwork.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-12 text-[#B08D57]">
            <div className="flex flex-col items-center max-w-xs">
              <Settings className="w-10 h-10 mb-3" />
              <h3 className="font-semibold text-xl mb-1">Quality Bikes</h3>
              <p className="text-gray-700 text-sm">
                Reliable, fuel-efficient, and ready for top delivery apps.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <ShieldCheck className="w-10 h-10 mb-3" />
              <h3 className="font-semibold text-xl mb-1">Fully Licensed</h3>
              <p className="text-gray-700 text-sm">
                All bikes registered legally for peace of mind.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <Zap className="w-10 h-10 mb-3" />
              <h3 className="font-semibold text-xl mb-1">Easy Process</h3>
              <p className="text-gray-700 text-sm">
                Apply, sign, and ride — all from your phone.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section
          id="packages"
          className="max-w-6xl mx-auto mb-20 px-6 sm:px-8 lg:px-16 py-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2F33] mb-10 text-center">
            Available Rental Packages
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bikePackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-6 text-left rounded-xl shadow-md ${
                  pkg.highlight
                    ? "border-2 border-[#B08D57] shadow-lg"
                    : "border border-[#D3CEC4]"
                } bg-white`}
              >
                {/* For Business Package show two images side by side */}
                {pkg.image2 ? (
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/2 h-40 relative rounded-md overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="w-1/2 h-40 relative rounded-md overflow-hidden">
                      <Image
                        src={pkg.image2}
                        alt={pkg.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                )}

                <h3 className="text-xl font-semibold text-[#2C2F33] mb-2">
                  {pkg.packageName}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{pkg.description}</p>
                <ul className="text-sm text-gray-700 mb-4 list-disc list-inside space-y-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-[#2C2F33] mb-4">
                  {pkg.price}
                </p>
                <Link
                  href={pkg.buttonLink}
                  className={`inline-block px-5 py-2 rounded-md hover:bg-[#997447] transition ${
                    pkg.highlight ? "bg-[#B08D57] text-white" : pkg.buttonStyle
                  }`}
                >
                  {pkg.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* How it works - vertical on mobile, horizontal on desktop */}
        <section
          id="how-it-works"
          className="max-w-5xl mx-auto mb-24 px-6 sm:px-8 lg:px-16 py-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2F33] mb-12 text-center">
            How It Works
          </h2>

          <div className="relative flex flex-col sm:flex-row justify-between sm:items-center gap-12 sm:gap-0">
            {/* Vertical line for mobile */}
            <div className="absolute sm:hidden left-7 top-14 bottom-0 w-1 bg-[#B08D57] rounded"></div>

            {/* Horizontal line for desktop */}
            <div className="hidden sm:block absolute top-7 left-0 right-0 h-1 bg-[#B08D57] rounded"></div>

            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center relative sm:flex-1"
                >
                  {/* Circle with step number */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#B08D57] bg-white mb-3 relative z-10">
                    <span className="text-[#B08D57] font-bold text-lg">{idx + 1}</span>
                  </div>

                  {/* Icon */}
                  <Icon className="w-8 h-8 text-[#B08D57] mb-2" />

                  {/* Title */}
                  <h4 className="font-semibold text-[#2C2F33] mb-1">{step.title}</h4>

                  {/* Description */}
                  <p className="text-gray-700 text-sm max-w-[14rem]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <ReviewSlider />
      </main>

      <Footer />
    </>
  );
}
