"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { X, Menu, Bike, Workflow, ClipboardList } from "lucide-react";

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
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Top Banner */}
        <div className="flex justify-between items-center bg-[#1E3A8A] text-white text-xs sm:text-sm px-4 md:px-6 py-2 border-b border-blue-900">
          <span className="font-medium">
            📞 060 123 4567 | ✉️ support@mobizarides.co.za
          </span>
          <span className="hidden sm:inline italic text-white">
            Empowering Riders, One Delivery at a Time
          </span>
        </div>

        {/* Main Header */}
        <header className="bg-white shadow-md w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">
              Mobiza Rides!
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a
                href="#packages"
                className="text-[#7D7461] hover:text-[#1E3A8A] transition-colors font-semibold text-lg"
              >
                Packages
              </a>
              <a
                href="#how-it-works"
                className="text-[#7D7461] hover:text-[#1E3A8A] transition-colors font-semibold text-lg"
              >
                How It Works
              </a>
              <Link
                href="/apply"
                className="ml-4 flex items-center gap-2 text-[#7D7461] border border-[#B08D57] px-5 py-3 rounded-md hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition font-semibold text-lg"
              >
                <ClipboardList className="w-5 h-5" />
                Apply for a Bike
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-md text-[#7D7461] hover:text-[#1E3A8A] focus:outline-none transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-[96px] left-0 h-[calc(100%-96px)] w-72 p-6 flex flex-col bg-white/70 backdrop-blur-md shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } rounded-tr-3xl rounded-br-3xl`}
        style={{
          borderTopRightRadius: "1.5rem",
          borderBottomRightRadius: "1.5rem",
          borderRight: "2px solid #B08D57",
        }}
      >
        <nav className="flex flex-col space-y-6 text-lg font-semibold">
          <a
            href="#packages"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-[#7D7461] hover:text-[#1E3A8A] transition-colors"
          >
            <Bike className="w-6 h-6" />
            Packages
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-[#7D7461] hover:text-[#1E3A8A] transition-colors"
          >
            <Workflow className="w-6 h-6" />
            How It Works
          </a>
          <Link
            href="/apply"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 text-[#7D7461] border border-[#B08D57] px-5 py-3 rounded-md hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition text-center"
          >
            <ClipboardList className="w-5 h-5" />
            Apply for a Bike
          </Link>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-300 text-[#7D7461] text-sm">
          &copy; {new Date().getFullYear()} Mobiza Rentals
        </div>
      </div>
    </>
  );
}
