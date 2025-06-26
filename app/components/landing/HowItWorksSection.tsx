"use client";
import { ClipboardList, Verified, CreditCard, Truck, Bike } from "lucide-react";

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

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="max-w-5xl mx-auto mb-24 px-6 sm:px-8 lg:px-16 py-12 border-t border-[#D3CEC4] w-full"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-12 text-center">
        How It Works
      </h2>
      <div className="relative flex flex-col sm:flex-row justify-between sm:items-center gap-12 sm:gap-0">
        <div className="absolute sm:hidden left-7 top-14 bottom-0 w-1 bg-[#C8102E] rounded"></div>
        <div className="hidden sm:block absolute top-7 left-0 right-0 h-1 bg-[#C8102E] rounded"></div>

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center relative sm:flex-1 "
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#C8102E] bg-white mb-3 relative z-10">
                <span className="text-[#C8102E] font-bold text-lg">
                  {idx + 1}
                </span>
              </div>
              <Icon className="w-8 h-8 text-[#C8102E] mb-2" />
              <h4 className="font-semibold text-black mb-1">{step.title}</h4>
              <p className="text-[#333333] text-sm max-w-[14rem]">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
