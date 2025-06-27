"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

type Props = {
  formData: any;
  onBack: () => void;
  onSubmit: () => void;
};

const bikePackages = [
  {
    id: "starter",
    packageName: "Starter Package",
    name: "BigBoy Velocity 150cc",
    description: "A basic package for new riders getting started.",
    image: "/images/BigBoy1Cargo.jpg",
    price: "R650/week",
    color: "bg-[#F9F4EF]",
  },
  {
    id: "pro",
    packageName: "Pro Rider Package",
    name: "BigBoy Velocity 150cc",
    description:
      "Best for riders who want peace of mind with service coverage.",
    image: "/images/BigBoy1Cargo.jpg",
    price: "R950/week",
    color: "bg-[#FFF9F0]",
  },
  {
    id: "business",
    packageName: "Business Package",
    name: "BigBoy Velocity 150cc or 250cc",
    description:
      "Designed for businesses renting 3+ bikes with full maintenance.",
    image: "/images/BigBoy1Cargo.jpg",
    price: "R650–R1,100/week",
    color: "bg-[#EFF7F6]",
  },
];

export default function Step5({ formData, onBack, onSubmit }: Props) {
  const [agreed, setAgreed] = useState(false);
  const selectedPackage = bikePackages.find(
    (pkg) => pkg.id === formData.package
  );

  return (
    <div className="space-y-6 bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#C8102E]">
        Step 5: Review & Submit
      </h2>

      <div className="text-[#2C2F33] space-y-2">
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

      {selectedPackage && (
        <div
          className={`${selectedPackage.color} rounded-xl p-4 shadow-md flex gap-4`}
        >
          <Image
            src={selectedPackage.image}
            alt={selectedPackage.packageName}
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-[#2C2F33]">
              {selectedPackage.packageName}
            </h3>
            <p className="text-sm text-gray-700">
              {selectedPackage.description}
            </p>
            <p className="mt-1 font-semibold text-[#C8102E]">
              {selectedPackage.price}
            </p>
          </div>
        </div>
      )}

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
