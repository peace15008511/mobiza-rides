"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

type Props = {
  formData: any;
  onBack: () => void;
  onSubmit: () => void;
};

const basePrice = 700;
const addOnPrice = (count: number) => (count > 4 ? 75 : 150);

export default function Step5({ formData, onBack, onSubmit }: Props) {
  const [agreed, setAgreed] = useState(false);

  const isBusiness = formData.package === "business";
  const quantity = isBusiness ? formData.bikeQuantity || 1 : 1;
  const service = formData.servicePlan ? addOnPrice(quantity) : 0;
  const maintenance = formData.maintenancePlan ? addOnPrice(quantity) : 0;
  const totalWeekly = (basePrice + service + maintenance) * quantity;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#C8102E]">
        Step 5: Review & Submit
      </h2>

      {/* Personal Info */}
      <div className="text-[#2C2F33] space-y-2 text-sm">
        <p>
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Surname:</strong> {formData.surname}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {formData.phoneNumber}
        </p>
        <p>
          <strong>Address:</strong> {formData.address}, {formData.city},{" "}
          {formData.province}, {formData.zipCode}
        </p>
      </div>

      {/* Package Summary */}
      <div
        className={`${
          isBusiness ? "bg-[#EFF7F6]" : "bg-[#F9F4EF]"
        } rounded-xl p-4 shadow-md flex gap-4`}
      >
        <Image
          src="/images/BigBoy1Cargo.jpg"
          alt="BigBoy Velocity 150cc"
          width={100}
          height={100}
          className="rounded-lg object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-[#2C2F33]">
            {isBusiness ? "Business Package" : "Individual Package"}
          </h3>
          <p className="text-sm text-gray-700">
            BigBoy Velocity 150cc rental
            {isBusiness ? ` for ${quantity} bike(s)` : ""}
          </p>

          <ul className="mt-2 text-sm text-[#2C2F33] list-disc ml-4">
            <li>Base rental: R{basePrice}/week</li>
            {formData.servicePlan && (
              <li>
                Service Plan: R{service}
                {isBusiness ? "/bike" : ""}/week
              </li>
            )}
            {formData.maintenancePlan && (
              <li>
                Maintenance Plan: R{maintenance}
                {isBusiness ? "/bike" : ""}/week
              </li>
            )}
          </ul>

          <p className="mt-2 font-semibold text-[#C8102E]">
            Total: R{totalWeekly}/week
          </p>
        </div>
      </div>

      {/* Agreement */}
      <div className="flex items-start space-x-2 pt-2">
        <input
          type="checkbox"
          id="agree"
          className="mt-1"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          required
        />
        <label htmlFor="agree" className="text-sm text-[#2C2F33]">
          I agree to the{" "}
          <a href="/terms" target="_blank" className="text-[#1E3A8A] underline">
            Terms and Conditions
          </a>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-200 text-[#2C2F33] hover:bg-gray-300 transition"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>

        <button
          onClick={onSubmit}
          type="button"
          disabled={!agreed}
          className={`py-2 px-6 rounded-xl text-white transition duration-300 ${
            agreed
              ? "bg-gradient-to-r from-black to-[#C8102E] hover:from-[#C8102E] hover:to-[#C8102E]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}
