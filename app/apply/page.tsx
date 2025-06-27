"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Step1 from "@/components/application/Step1";
import Step2 from "@/components/application/Step2";
import Step3 from "@/components/application/Step3";
import Step4 from "@/components/application/Step4";
import Step5 from "@/components/application/Step5";
import ProgressBar from "@/components/application/ProgressBar";
import Modal from "@/components/Modal";

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const [formData, setFormDataState] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    package: "",
    bikeQuantity: 1,
    servicePlan: false,
    maintenancePlan: false,
  });

  const setFormData = (newData: Partial<typeof formData>) => {
    setFormDataState((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleModalClose = () => {
    setShowModal(false);
    router.push("/");
  };

  const steps = [
    <Step1
      key="step1"
      formData={formData}
      setFormData={setFormData}
      onNext={nextStep}
    />,
    <Step2
      key="step2"
      formData={formData}
      setFormData={setFormData}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <Step3
      key="step3"
      formData={formData}
      setFormData={setFormData}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <Step4
      key="step4"
      formData={formData}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <Step5
      key="step5"
      formData={formData}
      onBack={prevStep}
      onSubmit={() => setShowModal(true)}
    />,
  ];

  return (
    <div className="relative min-h-screen bg-[#FDFCFB]">
      {/* Top Floating Menu */}
      <div className="fixed top-4 left-4 z-50 flex items-center space-x-4">
        {/* Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-black text-white rounded-md p-2 hover:bg-[#C8102E] transition"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Right-expanding nav items */}
        {menuOpen && (
          <div className="flex items-center space-x-4 bg-white shadow-md px-4 py-2 rounded-lg">
            <Link
              href="/"
              className="text-black font-semibold hover:text-[#C8102E] transition"
            >
              Home
            </Link>
            <a
              href="https://wa.me/27761234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:text-[#C8102E] transition"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>

      {/* Main Application Content */}
      <div className="max-w-2xl mx-auto p-6 pt-20">
        <h1 className="text-3xl font-extrabold text-[#000000] text-center mb-6">
          Mobiza Rides Application
        </h1>

        <ProgressBar currentStep={step + 1} totalSteps={steps.length} />

        <div className="bg-white p-6 shadow-md rounded-lg">{steps[step]}</div>

        <Modal
          isOpen={showModal}
          onClose={handleModalClose}
          title="Application Submitted Successfully"
        >
          <p className="text-gray-700 mb-2">
            Thank you for applying! We're reviewing your application.
          </p>
          <p className="text-sm text-gray-500">
            You’ll be notified shortly. Once approved, you’ll be able to make
            payment.
          </p>
        </Modal>
      </div>
    </div>
  );
}
