"use client";
import { Settings, ShieldCheck, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="max-w-4xl mx-auto mb-20 px-6 sm:px-8 lg:px-16 py-16 bg-[#FDFCFB] rounded-xl shadow-md border border-[#C8102E] text-center"
    >
      <h2 className="text-3xl font-bold text-black mb-6">About Mobiza Rides</h2>
      <p className="text-black/80 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
        At Mobiza Rides, we empower delivery riders by providing affordable,
        fully licensed bikes ready to hit the road. Our seamless 100% online
        application process ensures you can get started quickly, legally, and
        confidently — no office visits or complicated paperwork.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-12 text-[#C8102E]">
        <div className="flex flex-col items-center max-w-xs">
          <Settings className="w-10 h-10 mb-3" />
          <h3 className="font-semibold text-xl mb-1 text-black">
            Quality Bikes
          </h3>
          <p className="text-black/70 text-sm">
            Reliable, fuel-efficient, and ready for top delivery apps.
          </p>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <ShieldCheck className="w-10 h-10 mb-3" />
          <h3 className="font-semibold text-xl mb-1 text-black">
            Fully Licensed
          </h3>
          <p className="text-black/70 text-sm">
            All bikes registered legally for peace of mind.
          </p>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <Zap className="w-10 h-10 mb-3" />
          <h3 className="font-semibold text-xl mb-1 text-black">
            Easy Process
          </h3>
          <p className="text-black/70 text-sm">
            Apply, sign, and ride — all from your phone.
          </p>
        </div>
      </div>
    </section>
  );
}
