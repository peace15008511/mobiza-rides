import { Briefcase, UserCheck, FileText, MapPin, Phone } from "lucide-react";

export default function RequirementsSection() {
  return (
    <section id="requirements" className="py-16 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#2C2F33] mb-6">
          What is required?
        </h2>
        <p className="text-[#2C2F33] text-md mb-12 max-w-2xl mx-auto">
          We’ve made it simple for both individuals and businesses to get
          started. Below are the documents and criteria required for a smooth
          approval process.
        </p>

        <div className="grid gap-10 lg:grid-cols-2 text-left">
          {/* Individual Riders */}
          <div className="p-8 rounded-xl shadow-md transition hover:shadow-lg bg-gradient-to-tr from-gray-700 to-gray-900 text-white">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-white" />
              <h3 className="text-xl font-semibold text-white">
                For Individual Riders
              </h3>
            </div>
            <ul className="list-disc list-inside text-white space-y-2">
              <li>
                <FileText className="inline w-4 h-4 mr-2 text-white" /> South
                African ID or Passport + Traffic Register
              </li>
              <li>
                <MapPin className="inline w-4 h-4 mr-2 text-white" /> Proof of
                Address (not older than 3 months)
              </li>
              <li>
                <Phone className="inline w-4 h-4 mr-2 text-white" /> Working
                smartphone with GPS and WhatsApp
              </li>
              <li>
                Proof of employment or delivery platform account (e.g. Uber
                Eats, MR D, Bolt)
              </li>
              <li>
                R2,000 refundable deposit for registration, tracking, and
                delivery
              </li>
            </ul>
          </div>

          {/* Businesses / Fleets */}
          <div className="p-8 rounded-xl shadow-md transition hover:shadow-lg bg-gradient-to-tr from-gray-700 to-gray-900 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-white" />
              <h3 className="text-xl font-semibold text-white">
                For Businesses
              </h3>
            </div>
            <ul className="list-disc list-inside text-white space-y-2">
              <li>Company registration documents (CIPC / Business license)</li>
              <li>Director’s ID and Proof of Address</li>
              <li>Delivery platform proof or operational history</li>
              <li>Minimum of 3 bike rentals to qualify for fleet pricing</li>
              <li>
                R2,000 deposit per bike to cover paperwork, GPS, and delivery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
