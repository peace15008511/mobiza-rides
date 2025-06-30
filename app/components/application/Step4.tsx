"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

type Props = {
  onNext: () => void;
  onBack: () => void;
  formData: any;
};

export default function Step4({ onNext, onBack, formData }: Props) {
  const [error, setError] = useState("");

  const isBusiness = formData.package === "business";

  const handleFileChange = (name: string, file: File | null) => {
    formData[name] = file;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields before moving on
    const requiredFields = isBusiness
      ? ["businessReg", "companyAddress", "directorId", "driverLicense"]
      : ["id", "license", "residence"];

    const missing = requiredFields.find((key) => !formData[key]);

    if (missing) {
      setError("Please upload all required documents before proceeding.");
      return;
    }

    setError("");
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-[#C8102E]">
        Step 4: Upload Documents
      </h2>

      <div className="space-y-5">
        {isBusiness ? (
          <>
            <UploadField
              label="Upload Business Registration Document"
              name="businessReg"
              required
              onChange={handleFileChange}
            />
            <UploadField
              label="Upload Company Proof of Address"
              name="companyAddress"
              required
              onChange={handleFileChange}
            />
            <UploadField
              label="Upload Director/Owner ID"
              name="directorId"
              required
              onChange={handleFileChange}
            />
            <UploadField
              label="Upload Driver’s License (any assigned driver)"
              name="driverLicense"
              required
              onChange={handleFileChange}
            />
          </>
        ) : (
          <>
            <UploadField
              label="Upload ID or Passport"
              name="id"
              required
              onChange={handleFileChange}
            />
            <UploadField
              label="Upload Driver’s License"
              name="license"
              required
              onChange={handleFileChange}
            />
            <UploadField
              label="Upload Proof of Residence"
              name="residence"
              required
              onChange={handleFileChange}
            />
          </>
        )}
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

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
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-black to-[#C8102E] hover:from-[#C8102E] hover:to-[#C8102E] text-white py-2 px-6 rounded-xl transition duration-300"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}

function UploadField({
  label,
  name,
  required,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  onChange: (name: string, file: File | null) => void;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-[#2C2F33] mb-1">{label}</label>
      <input
        type="file"
        required={required}
        onChange={(e) => onChange(name, e.target.files?.[0] || null)}
        className="
          block w-full text-sm text-[#2C2F33]
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-white file:bg-[#C8102E]
          hover:file:bg-black
          transition
        "
      />
    </div>
  );
}
