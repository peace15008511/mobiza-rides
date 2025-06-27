"use client";

import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

type FloatingMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MENU_WIDTH = 180;

export default function FloatingMenu({ open, setOpen }: FloatingMenuProps) {
  const router = useRouter();

  const whatsappLink = "https://wa.me/27831234567";

  return (
    <nav
      className="fixed top-4 left-0 z-50 flex items-center h-12"
      style={{
        width: open ? MENU_WIDTH : 40,
        transition: "width 0.3s ease",
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow: open ? "2px 0 8px rgba(0,0,0,0.15)" : "none",
        borderRadius: "0 8px 8px 0",
      }}
    >
      {!open && (
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="p-2 rounded-md bg-black text-white hover:bg-[#C8102E] transition w-10 h-10 flex justify-center items-center ml-2"
        >
          <Menu size={24} />
        </button>
      )}

      {open && (
        <div className="flex items-center space-x-4 px-3 w-full">
          <button
            onClick={() => {
              router.push("/");
              setOpen(false);
            }}
            className="text-black font-semibold hover:text-[#C8102E] transition whitespace-nowrap"
          >
            Home
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold hover:text-[#C8102E] transition whitespace-nowrap"
          >
            WhatsApp
          </a>

          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2 rounded-md bg-black text-white hover:bg-[#C8102E] transition w-10 h-10 flex justify-center items-center ml-auto"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </nav>
  );
}
