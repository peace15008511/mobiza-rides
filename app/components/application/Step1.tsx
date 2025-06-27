"use client";

import { ArrowRight, CheckCircle, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
};

const basePrice = 700;
const calcAddOnPrice = (count: number) => (count > 4 ? 75 : 150);

export default function Step1({ formData, setFormData, onNext }: Props) {
  const [selectedPackage, setSelectedPackage] = useState(
    formData.package || ""
  );

  const [individualAddService, setIndividualAddService] = useState(false);
  const [individualAddMaintenance, setIndividualAddMaintenance] =
    useState(false);

  const [businessQuantity, setBusinessQuantity] = useState(1);
  const [businessAddService, setBusinessAddService] = useState(false);
  const [businessAddMaintenance, setBusinessAddMaintenance] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedPackage === "individual") {
      setFormData({
        ...formData,
        package: "individual",
        bikeQuantity: 1,
        servicePlan: individualAddService,
        maintenancePlan: individualAddMaintenance,
      });
    }

    if (selectedPackage === "business") {
      setFormData({
        ...formData,
        package: "business",
        bikeQuantity: businessQuantity,
        servicePlan: businessAddService,
        maintenancePlan: businessAddMaintenance,
      });
    }

    onNext();
  };

  const calculateIndividualPrice = () => {
    const service = individualAddService ? 150 : 0;
    const maintenance = individualAddMaintenance ? 150 : 0;
    return `R${basePrice + service + maintenance}/week`;
  };

  const calculateBusinessPrice = () => {
    const perAddOn = calcAddOnPrice(businessQuantity);
    const service = businessAddService ? perAddOn : 0;
    const maintenance = businessAddMaintenance ? perAddOn : 0;
    return `R${(basePrice + service + maintenance) * businessQuantity}/week`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-[#C8102E]">
        Step 1: Select Package
      </h2>

      <div className="grid gap-6">
        {/* Individual Package */}
        <div
          onClick={() => setSelectedPackage("individual")}
          className={`cursor-pointer transition transform ${
            selectedPackage === "individual"
              ? "ring-2 ring-[#C8102E]"
              : "hover:shadow-lg"
          } bg-[#F9F4EF] rounded-xl p-4 flex flex-col gap-4`}
        >
          <div className="flex items-center gap-4">
            <Image
              src="/images/BigBoy1Cargo.jpg"
              alt="Individual Package"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#2C2F33]">
                Individual Package
              </h3>
              <p className="text-sm text-[#4B4B4B]">
                One bike. Optional add-ons.
              </p>
              <p className="mt-1 font-semibold text-[#C8102E]">
                {selectedPackage === "individual"
                  ? calculateIndividualPrice()
                  : "R700/week"}
              </p>
            </div>
            {selectedPackage === "individual" && (
              <CheckCircle className="text-[#C8102E]" size={24} />
            )}
          </div>

          {selectedPackage === "individual" && (
            <div className="text-sm text-[#2C2F33] space-y-2 pt-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={individualAddService}
                  onChange={(e) => setIndividualAddService(e.target.checked)}
                />
                Add Service Plan (R150/week)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={individualAddMaintenance}
                  onChange={(e) =>
                    setIndividualAddMaintenance(e.target.checked)
                  }
                />
                Add Maintenance Plan (R150/week)
              </label>
            </div>
          )}
        </div>

        {/* Business Package */}
        <div
          onClick={() => setSelectedPackage("business")}
          className={`cursor-pointer transition transform ${
            selectedPackage === "business"
              ? "ring-2 ring-[#C8102E]"
              : "hover:shadow-lg"
          } bg-[#EFF7F6] rounded-xl p-4 flex flex-col gap-4`}
        >
          <div className="flex items-center gap-4">
            <Image
              src="/images/BigBoy1Cargo.jpg"
              alt="Business Package"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#2C2F33]">
                Business Package
              </h3>
              <p className="text-sm text-[#4B4B4B]">
                1+ bikes. Add-ons with bulk discount.
              </p>
              <p className="mt-1 font-semibold text-[#C8102E]">
                {selectedPackage === "business"
                  ? calculateBusinessPrice()
                  : "R700+/week"}
              </p>
            </div>
            {selectedPackage === "business" && (
              <CheckCircle className="text-[#C8102E]" size={24} />
            )}
          </div>

          {selectedPackage === "business" && (
            <div className="text-sm text-[#2C2F33] space-y-3 pt-2">
              {/* Quantity Selector */}
              <div>
                <label className="block font-semibold mb-1">
                  Number of Bikes
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setBusinessQuantity((q) => Math.max(1, q - 1))
                    }
                    className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-lg font-bold">{businessQuantity}</span>
                  <button
                    type="button"
                    onClick={() => setBusinessQuantity((q) => q + 1)}
                    className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add-ons */}
              <div className="flex flex-col gap-2 pt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={businessAddService}
                    onChange={(e) => setBusinessAddService(e.target.checked)}
                  />
                  Add Service Plan (R{calcAddOnPrice(businessQuantity)}/bike)
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={businessAddMaintenance}
                    onChange={(e) =>
                      setBusinessAddMaintenance(e.target.checked)
                    }
                  />
                  Add Maintenance Plan (R{calcAddOnPrice(businessQuantity)}
                  /bike)
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={!selectedPackage}
          className={`flex items-center justify-center gap-2 py-2 px-6 rounded-xl text-white transition duration-300 ${
            selectedPackage
              ? "bg-gradient-to-r from-black to-[#C8102E] hover:from-[#C8102E] hover:to-[#C8102E]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
