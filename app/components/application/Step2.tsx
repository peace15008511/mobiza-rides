"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

type Props = {
  formData: any;
  setFormData: (data: Partial<any>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function Step2({
  formData,
  setFormData,
  onNext,
  onBack,
}: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#C8102E]">
        Step 2: Your Details
      </h2>

      {/* First Name */}
      <div className="relative">
        <input
          type="text"
          id="firstName"
          required
          value={formData.firstName || ""}
          onChange={(e) => setFormData({ firstName: e.target.value })}
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="firstName"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          First Name
        </label>
      </div>

      {/* Surname */}
      <div className="relative">
        <input
          type="text"
          id="surname"
          required
          value={formData.surname || ""}
          onChange={(e) => setFormData({ surname: e.target.value })}
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="surname"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          Surname
        </label>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          id="email"
          required
          value={formData.email || ""}
          onChange={(e) => setFormData({ email: e.target.value })}
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          Email Address
        </label>
      </div>

      {/* Phone Number */}
      <div className="relative">
        <input
          type="tel"
          id="phone"
          required
          value={formData.phoneNumber || ""}
          onChange={(e) => setFormData({ phoneNumber: e.target.value })}
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="phone"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          Phone Number
        </label>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 px-4 py-2 rounded-xl bg-gray-200 text-[#2C2F33] hover:bg-gray-300 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 py-2 px-6 rounded-xl text-white bg-gradient-to-r from-black to-[#C8102E] hover:from-[#C8102E] hover:to-[#C8102E] transition duration-300"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
