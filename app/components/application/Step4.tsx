"use client";

import { ArrowRight, ArrowLeft, Upload } from "lucide-react";

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
      <h2 className="text-2xl font-bold text-[#B08D57]">
        Step 4: Upload Documents
      </h2>

      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">
            Upload ID or Passport
          </label>
          <input
            type="file"
            required
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-white file:bg-[#B08D57] hover:file:bg-[#1E3A8A] transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">
            Upload Driver’s License
          </label>
          <input
            type="file"
            required
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-white file:bg-[#B08D57] hover:file:bg-[#1E3A8A] transition"
          />
        </div>
      </div>

      <div className="flex justify-between pt-2">
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
