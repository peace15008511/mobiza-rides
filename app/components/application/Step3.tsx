"use client";

import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";

type Props = {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
};

const bikePackages = [
  {
    id: "starter",
    packageName: "Starter Package",
    name: "BigBoy Velocity 150cc",
    description: "A basic package for new riders getting started.",
    image: "/images/BigBoy1Cargo.jpg",
    price: "R650/week",
    featuresIncluded: [
      "BigBoy Velocity 150cc",
      "Helmet, USB, cellphone holder, crashbar, reinforced bracket & top box",
    ],
    featuresNotIncluded: ["Service Plan", "Maintenance Plan"],
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
    featuresIncluded: [
      "BigBoy Velocity 150cc",
      "Helmet, USB, cellphone holder, crashbar, reinforced bracket & top box",
      "Service Plan",
    ],
    featuresNotIncluded: ["Maintenance Plan"],
    color: "bg-[#FFF9F0]",
  },
  {
    id: "business",
    packageName: "Business Package",
    name: "BigBoy Velocity 150cc or 250cc",
    description:
      "Designed for businesses renting 3+ bikes with full maintenance.",
    image: "/images/BigBoy1Cargo.jpg",
    price: "R650-R1,100/week",
    featuresIncluded: [
      "BigBoy Velocity 150cc or 250cc",
      "Helmet, USB, cellphone holder, crashbar, reinforced bracket & top box",
      "Service Plan",
      "Full Maintenance Plan (repairs, wear & tear included)",
    ],
    featuresNotIncluded: ["Only available for 3+ bikes", "Rider"],
    color: "bg-[#EFF7F6]",
  },
];

export default function Step3({
  formData,
  setFormData,
  onNext,
  onBack,
}: Props) {
  const handleSelect = (id: string) => {
    setFormData({ package: id });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#B08D57]">
        Step 3: Select Package
      </h2>

      <div className="grid gap-6">
        {bikePackages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => handleSelect(pkg.id)}
            className={`cursor-pointer transition-transform transform ${
              formData.package === pkg.id
                ? "ring-2 ring-[#1E3A8A]"
                : "hover:shadow-lg"
            } ${pkg.color} rounded-xl p-4 flex flex-col gap-4`}
          >
            <div className="flex items-center gap-4">
              <Image
                src={pkg.image}
                alt={pkg.packageName}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#2C2F33]">
                  {pkg.packageName}
                </h3>
                <p className="text-sm text-gray-600">{pkg.description}</p>
                <p className="mt-1 font-semibold text-[#B08D57]">{pkg.price}</p>
              </div>
              {formData.package === pkg.id && (
                <CheckCircle className="text-[#1E3A8A]" size={24} />
              )}
            </div>

            <div className="text-sm text-gray-700">
              <p className="font-semibold">Included:</p>
              <ul className="list-disc ml-5">
                {pkg.featuresIncluded.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              {pkg.featuresNotIncluded.length > 0 && (
                <>
                  <p className="font-semibold mt-2 text-gray-500">
                    Not Included:
                  </p>
                  <ul className="list-disc ml-5 text-gray-400">
                    {pkg.featuresNotIncluded.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 px-4 py-2 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <button
          type="submit"
          disabled={!formData.package}
          className="flex items-center justify-center gap-2 bg-[#B08D57] text-white py-2 px-6 rounded-xl hover:bg-[#1E3A8A] transition disabled:opacity-50"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
