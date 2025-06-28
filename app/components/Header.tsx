"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { X, Menu, Bike, Workflow, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Fixed Full Header (Top Banner + Main Header) */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Top Banner */}
        <div className="flex justify-between items-center bg-black text-white text-xs sm:text-sm px-4 md:px-6 py-2 border-b border-neutral-800 h-[32px]">
          <span className="font-medium">
            012 533 9942 | support@mobizarides.com
          </span>
          <span className="hidden sm:inline italic">
            Empowering Riders, One Delivery at a Time
          </span>
        </div>

        {/* Main Header */}
        <header className="bg-black shadow-md w-full h-[64px]">
          <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center h-[180px] pl-4 sm:pl-6">
              <Image
                src="/images/mobizarideslogo.png"
                alt="Mobiza Rides Logo"
                width={586}
                height={180}
                className="h-[180px] w-auto object-contain hover:opacity-90 transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center font-anton text-white">
              <a
                href="#packages"
                className="font-extrabold hover:text-[#C8102E] transition-colors duration-300"
              >
                Packages
              </a>
              <a
                href="#how-it-works"
                className="font-extrabold hover:text-[#C8102E] transition-colors duration-300"
              >
                How It Works
              </a>
              <Link
                href="#enquire"
                className="ml-4 font-extrabold hover:text-[#C8102E] transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/apply"
                className="ml-4 flex items-center gap-2 font-extrabold text-white border border-white px-4 py-2 hover:text-[#C8102E] hover:border-[#C8102E] transition-colors duration-300 text-sm"
              >
                Apply now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-white hover:text-[#C8102E] focus:outline-none transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-[96px] left-0 w-full h-[calc(100%-96px)] z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-In Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-[96px] left-0 h-[calc(100%-96px)] w-72 p-6 flex flex-col bg-black backdrop-blur-md shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          borderRight: "5px solid transparent",
          backgroundImage: `linear-gradient(to right, black, black), linear-gradient(to bottom, #C8102E, #F9D5D3)`,
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "padding-box, border-box",
          borderImageSlice: 1,
        }}
      >
        <nav className="flex flex-col text-lg font-anton font-extrabold text-white">
          <a
            href="#packages"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-4 border-t border-neutral-700 cursor-pointer hover:text-[#C8102E] transition-colors duration-300"
          >
            <Bike className="w-6 h-6" />
            Packages
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-4 border-t border-neutral-700 cursor-pointer hover:text-[#C8102E] transition-colors duration-300"
          >
            <Workflow className="w-6 h-6" />
            How It Works
          </a>
          <Link
            href="#enquire"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-4 border-t border-neutral-700 cursor-pointer hover:text-[#C8102E] transition-colors duration-300"
          >
            <Phone className="w-6 h-6" />
            Contact Us
          </Link>

          <Link
            href="/apply"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-4 border-t border-b border-neutral-700 cursor-pointer hover:text-[#C8102E] transition-colors duration-300"
          >
            Apply now
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-800 text-white text-sm">
          &copy; {new Date().getFullYear()} MobiZA Rides
        </div>
      </div>
    </>
  );
}
