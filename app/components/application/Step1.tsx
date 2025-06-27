"use client";

import { ArrowRight } from "lucide-react";

type Props = {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
};

export default function Step1({ formData, setFormData, onNext }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#C8102E]">
        Step 1: Your Details
      </h2>

      {/* First Name */}
      <div className="relative">
        <input
          type="text"
          id="firstName"
          required
          value={formData.firstName || ""}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="surname"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          Surname
        </label>
      </div>

      {/* Email Address */}
      <div className="relative">
        <input
          type="email"
          id="email"
          required
          value={formData.email || ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 text-[#2C2F33] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <label
          htmlFor="phone"
          className="absolute left-4 top-2 text-sm text-[#2C2F33] peer-focus:text-black peer-focus:text-xs peer-focus:top-1 transition-all"
        >
          Phone Number
        </label>
      </div>

      {/* Submit Button with Gradient */}
      <button
        type="submit"
        className="
          w-full flex items-center justify-center gap-2
          text-white py-3 px-6 rounded-xl
          bg-gradient-to-r from-black to-[#C8102E]
          transition duration-300
          hover:bg-[#C8102E] hover:from-[#C8102E] hover:to-[#C8102E]
        "
      >
        Next <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
