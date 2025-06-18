import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Mobiza Rides!</h3>
          <p className="text-sm text-gray-600">
            Fully online delivery bike rentals — apply, get approved, and ride without any office visits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-800">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/bikes" className="hover:text-blue-600 transition">
                View Bikes
              </Link>
            </li>
            <li>
              <Link href="/apply" className="hover:text-blue-600 transition">
                Become a Rider
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-800">Contact Us</h4>
          <p className="text-sm text-gray-600 mb-3">
            Email: <a href="mailto:support@mobizarides.co.za" className="hover:text-blue-600">support@mobizarides.co.za</a><br />
            Phone: <a href="tel:+27123456789" className="hover:text-blue-600">+27 12 345 6789</a><br />
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com/mobizarides" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/mobizarides" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/mobizarides" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/mobizarides" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mobiza Rides!. All rights reserved.
      </div>
    </footer>
  );
}
