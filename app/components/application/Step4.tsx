"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function Step4({ onNext, onBack }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#C8102E]">
        Step 4: Upload Documents
      </h2>

      <div className="space-y-4">
        {/* ID/Passport Upload */}
        <div className="flex flex-col">
          <label className="text-sm text-[#2C2F33] mb-1">
            Upload ID or Passport
          </label>
          <input
            type="file"
            required
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

        {/* Driver’s License Upload */}
        <div className="flex flex-col">
          <label className="text-sm text-[#2C2F33] mb-1">
            Upload Driver’s License
          </label>
          <input
            type="file"
            required
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
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-2">
        {/* Back Button */}
        <button
          type="button"
          onClick={onBack}
          className="
            flex items-center gap-1 px-4 py-2 rounded-xl
            bg-gray-200 text-[#2C2F33]
            hover:bg-gray-300 transition
          "
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Next Button */}
        <button
          type="submit"
          className="
            flex items-center justify-center gap-2
            bg-black text-white py-2 px-6 rounded-xl
            hover:bg-[#C8102E] hover:text-white
            transition
          "
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
