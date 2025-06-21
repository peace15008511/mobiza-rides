"use client";

import clsx from "clsx";
import { User, MapPin, Package, Upload, CheckCircle } from "lucide-react";

type ProgressBarProps = {
  currentStep: number; // 1-based index (1–5)
  totalSteps: number;
};

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const stepIcons = [
    <User className="w-5 h-5" />,
    <MapPin className="w-5 h-5" />,
    <Package className="w-5 h-5" />,
    <Upload className="w-5 h-5" />,
    <CheckCircle className="w-5 h-5" />,
  ];

  return (
    <div className="flex items-center justify-between gap-2 px-4 mb-6">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div key={index} className="flex-1 flex items-center">
          {/* Step Circle */}
          <div
            className={clsx(
              "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm",
              index + 1 <= currentStep
                ? "bg-[#16A34A] text-white" // Green bg for active/current steps
                : "bg-gray-300 text-gray-600"
            )}
          >
            {stepIcons[index]}
          </div>

          {/* Step Connector */}
          {index < totalSteps - 1 && (
            <div
              className={clsx(
                "flex-1 h-1 mx-1 rounded-full",
                index + 1 < currentStep ? "bg-[#16A34A]" : "bg-gray-300" // Green connector for completed steps
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
