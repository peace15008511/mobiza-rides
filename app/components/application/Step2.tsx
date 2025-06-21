"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

type Props = {
  formData: any;
  setFormData: (data: any) => void;
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
      className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#B08D57]">Step 2: Address</h2>

      {/* Street Address */}
      <div className="relative">
        <input
          type="text"
          id="address"
          required
          value={formData.address}
          onChange={(e) => setFormData({ address: e.target.value })}
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent"
        />
        <label
          htmlFor="address"
          className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:text-[#B08D57] peer-focus:text-xs peer-focus:top-1 transition-all"
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
          value={formData.city}
          onChange={(e) => setFormData({ city: e.target.value })}
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent"
        />
        <label
          htmlFor="city"
          className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:text-[#B08D57] peer-focus:text-xs peer-focus:top-1 transition-all"
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
          value={formData.province}
          onChange={(e) => setFormData({ province: e.target.value })}
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent"
        />
        <label
          htmlFor="province"
          className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:text-[#B08D57] peer-focus:text-xs peer-focus:top-1 transition-all"
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
          onChange={(e) => setFormData({ zipCode: e.target.value })}
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent"
        />
        <label
          htmlFor="zipCode"
          className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:text-[#B08D57] peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          Zip Code
        </label>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 px-4 py-2 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-[#B08D57] text-white py-2 px-6 rounded-xl hover:bg-[#1E3A8A] transition"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
