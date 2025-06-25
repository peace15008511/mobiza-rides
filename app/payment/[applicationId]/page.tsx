"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const bikePackages = [
  {
    id: "starter",
    packageName: "Starter Package",
    name: "BigBoy Velocity 150cc",
    description: "A basic package for new riders getting started.",
    image: "/images/BigBoy1Cargo.jpg",
    price: 650,
    color: "bg-[#F9F4EF]",
  },
  {
    id: "pro",
    packageName: "Pro Rider Package",
    name: "BigBoy Velocity 150cc",
    description:
      "Best for riders who want peace of mind with service coverage.",
    image: "/images/BigBoy1Cargo.jpg",
    price: 950,
    color: "bg-[#FFF9F0]",
  },
  {
    id: "business",
    packageName: "Business Package",
    name: "BigBoy Velocity 150cc or 250cc",
    description:
      "Designed for businesses renting 3+ bikes with full maintenance.",
    image: "/images/BigBoy1Cargo.jpg",
    price: 1100,
    color: "bg-[#EFF7F6]",
  },
];

// Simulated user
const mockUser = {
  firstName: "Peace",
  surname: "Mulalo",
  package: "pro",
};

export default function PaymentPage() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [showTermsText, setShowTermsText] = useState(false);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [agreedToTnc, setAgreedToTnc] = useState(false);

  useEffect(() => {
    const pkg = bikePackages.find((p) => p.id === mockUser.package);
    setSelectedPackage(pkg);
  }, []);

  const total = selectedPackage ? selectedPackage.price + 2000 : 0;

  const handleOnlinePayment = async () => {
    if (!agreedToTnc) {
      alert("Please agree to the Terms and Conditions before proceeding.");
      return;
    }

    try {
      const res = await fetch("/api/payfast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total.toFixed(2),
          name: `${mockUser.firstName} ${mockUser.surname}`,
          email: "test@example.com",
        }),
      });

      const { form } = await res.json();

      // Create and submit a form to redirect user to PayFast sandbox
      const pfForm = document.createElement("form");
      pfForm.action = "https://sandbox.payfast.co.za/eng/process";
      pfForm.method = "POST";

      form.split("&").forEach((pair: string) => {
        const [key, value] = pair.split("=");
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = decodeURIComponent(key);
        input.value = decodeURIComponent(value);
        pfForm.appendChild(input);
      });

      document.body.appendChild(pfForm);
      pfForm.submit();
    } catch (err) {
      console.error("PayFast redirect error:", err);
      alert("There was an error initiating payment.");
    }
  };

  if (!selectedPackage) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-[#B08D57]">
        You're Almost There!
      </h2>

      <p className="text-gray-800 max-w-2xl">
        🎉 Congratulations{" "}
        <strong>
          {mockUser.firstName} {mockUser.surname}
        </strong>
        , you’ve been approved to rent a bike with <strong>Mobiza Rides</strong>
        ! You're just one payment away from riding your new delivery bike.
      </p>

      <div
        className={`${selectedPackage.color} rounded-xl p-4 shadow-md flex gap-4 max-w-md`}
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
          <p className="text-sm text-gray-700">{selectedPackage.description}</p>
          <p className="mt-1 font-semibold text-[#B08D57]">
            R{selectedPackage.price}/week
          </p>
        </div>
      </div>

      <div className="border-t pt-4 space-y-2 max-w-md">
        <h4 className="text-lg font-semibold text-[#2C2F33]">
          Payment Summary
        </h4>
        <div className="flex justify-between text-gray-700">
          <span>Package Price (1st Week)</span>
          <span>R{selectedPackage.price}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Security Deposit</span>
          <span>R2000</span>
        </div>
        <div className="flex justify-between font-bold text-[#B08D57] border-t pt-2">
          <span>Total Due</span>
          <span>R{total}</span>
        </div>
      </div>

      <div className="md:flex md:gap-8">
        {/* Online Payment Section */}
        <section className="flex-1 border rounded-xl p-6 shadow-sm">
          <h4 className="text-xl font-semibold text-[#2C2F33] mb-4">
            Pay Online (Recommended)
          </h4>

          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={agreedToTnc}
              onChange={() => setAgreedToTnc(!agreedToTnc)}
              className="mr-2"
            />
            <span className="text-gray-700 text-sm">
              I agree to the{" "}
              <button
                type="button"
                onClick={() => setShowTermsText(!showTermsText)}
                className="underline text-[#1E3A8A]"
              >
                Terms & Conditions
              </button>
            </span>
          </label>

          {showTermsText && (
            <div className="mb-4 max-h-48 overflow-y-auto border p-3 rounded text-sm bg-gray-50 text-gray-700">
              <p>
                By making this payment, you agree to Mobiza Rides' rental
                agreement, including:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Weekly payments are non-refundable once the bike is delivered.
                </li>
                <li>
                  You are responsible for the safe use and care of the bike.
                </li>
                <li>
                  Deposit is refundable upon successful return in original
                  condition.
                </li>
                <li>
                  Mobiza Rides reserves the right to revoke rentals for breach
                  of terms.
                </li>
              </ul>
            </div>
          )}

          <button
            disabled={!agreedToTnc}
            onClick={handleOnlinePayment}
            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
              agreedToTnc
                ? "bg-[#B08D57] hover:bg-[#1E3A8A]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Pay R{total} Now
          </button>
        </section>

        {/* Bank Transfer Section */}
        <section className="flex-1 border rounded-xl p-6 shadow-sm mt-8 md:mt-0">
          <h4 className="text-xl font-semibold text-[#2C2F33] mb-4">
            Bank Transfer Details
          </h4>
          <p className="text-sm text-gray-700 italic mb-4">
            Use this method only if you're unable to pay online. Upload proof of
            payment to confirm.
          </p>

          <div className="bg-gray-100 rounded-xl p-4 space-y-2 text-sm text-gray-800 mb-4">
            <p>
              <strong>Bank Name:</strong> FNB (First National Bank)
            </p>
            <p>
              <strong>Account Name:</strong> Mobiza Rides
            </p>
            <p>
              <strong>Account Number:</strong> 62012345678
            </p>
            <p>
              <strong>Branch Code:</strong> 250655
            </p>
            <p>
              <strong>Account Type:</strong> Cheque / Business
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300 text-sm mb-4">
            <p className="font-semibold text-yellow-800">Important:</p>
            <ul className="list-disc list-inside text-yellow-900 mt-1 space-y-1">
              <li>
                Use your full name or ID number as the{" "}
                <strong>payment reference</strong>.
              </li>
              <li>Send proof of payment below or via WhatsApp.</li>
              <li>We’ll confirm and get your bike ready for pickup.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="font-semibold text-[#2C2F33]">
              Upload Proof of Payment
            </h5>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setProofFile(e.target.files?.[0] || null)}
              className="block w-full border border-gray-300 p-2 rounded"
            />
            <button
              onClick={() => {
                if (!proofFile) {
                  alert("Please select a file to upload.");
                  return;
                }
                alert(`Proof of payment uploaded: ${proofFile.name}`);
                // Here you can add actual upload logic to backend or storage
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold w-full"
            >
              Upload POP
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Or send your POP on WhatsApp:{" "}
            <a
              href="https://wa.me/27735339942"
              target="_blank"
              className="text-[#25D366] font-semibold underline"
              rel="noreferrer"
            >
              Chat with Mobiza
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
