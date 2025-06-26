import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FDFCFB] text-black py-16 border-t border-[#D3CEC4] w-full">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#C8102E]">
            MobiZA Rides
          </h3>
          <p className="text-sm text-black/80">
            Fully online delivery bike rentals — apply, get approved, and ride
            without any office visits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#C8102E]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#packages"
                className="hover:text-[#C8102E] transition"
              >
                View packages
              </Link>
            </li>
            <li>
              <Link href="/apply" className="hover:text-[#C8102E] transition">
                Apply for a bike
              </Link>
            </li>
            <li>
              <Link
                href="#about-us"
                className="hover:text-[#C8102E] transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="hover:text-[#C8102E] transition"
              >
                How it works
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#C8102E]">
            Contact Us
          </h4>
          <p className="text-sm text-black/80 mb-3">
            Email:{" "}
            <a
              href="Support:support@mobizarides.com"
              className="hover:text-[#C8102E]"
            >
              support@mobizarides.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+27123456789" className="hover:text-[#C8102E]">
              +27 12 345 6789
            </a>
          </p>
          <div className="flex space-x-4 mt-2 text-black">
            <a
              href="https://facebook.com/mobizarides"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#C8102E]"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/mobizarides"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#C8102E]"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/mobizarides"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#C8102E]"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/mobizarides"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#C8102E]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-black/10 text-center text-sm text-black/60">
        &copy; {new Date().getFullYear()} MobiZa Rides. All rights reserved.
      </div>
    </footer>
  );
}
