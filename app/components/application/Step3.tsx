"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

type Props = {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function Step3({
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
      <h2 className="text-2xl font-bold text-[#C8102E]">Step 3: Address</h2>

      {/* Street Address */}
      <div className="relative">
        <input
          type="text"
          id="address"
          required
          value={formData.address || ""}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="address"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          Street Address
        </label>
      </div>

      {/* City / Town */}
      <div className="relative">
        <input
          type="text"
          id="city"
          required
          value={formData.city || ""}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="city"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          City / Town
        </label>
      </div>

      {/* Province */}
      <div className="relative">
        <input
          type="text"
          id="province"
          required
          value={formData.province || ""}
          onChange={(e) =>
            setFormData({ ...formData, province: e.target.value })
          }
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="province"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          Province
        </label>
      </div>

      {/* Zip Code */}
      <div className="relative">
        <input
          type="text"
          id="zipCode"
          required
          value={formData.zipCode || ""}
          onChange={(e) =>
            setFormData({ ...formData, zipCode: e.target.value })
          }
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="zipCode"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          Zip Code
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
