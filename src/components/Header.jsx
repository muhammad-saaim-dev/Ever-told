"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#FBF9F6] border-b border-[#EBE4DD] py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-[60px] h-[46px] md:w-[68px] md:h-[52px] flex items-center justify-center overflow-hidden mix-blend-multiply shrink-0">
              <Image 
                src="/logo.jpg" 
                alt="Ever Told Logo" 
                fill
                sizes="256px"
                className="object-contain scale-[1.6] md:scale-[1.7] brightness-[1.05] contrast-[1.05] transition-transform duration-300 group-hover:scale-[1.7] md:group-hover:scale-[1.8]" 
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-medium tracking-[0.15em] text-[#2C3E2D]">
                EVER TOLD
              </span>
              <span className="text-[14px] text-[#7E8B77] font-serif font-bold tracking-wide mt-0.5 leading-none">
                A Home for Every Legacy
              </span>
            </div>
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2C3E2D] hover:text-[#55624C] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Right Section: Nav and CTAs */}
        <div className={`flex-col md:flex-row md:flex items-stretch md:items-center gap-6 md:gap-10 ${isOpen ? 'flex' : 'hidden'}`}>
          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-9">
            <Link
              href="/how-it-works"
              onClick={() => setIsOpen(false)}
              className={`text-[13px] font-semibold transition-colors py-1 ${
                pathname === "/how-it-works"
                  ? "text-[#55624C] md:border-b-2 md:border-[#55624C]"
                  : "text-[#2C3E2D] hover:text-[#55624C]"
              }`}
            >
              How It Works
            </Link>

            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className={`text-[13px] font-semibold transition-colors py-1 ${
                pathname === "/pricing"
                  ? "text-[#55624C] md:border-b-2 md:border-[#55624C]"
                  : "text-[#2C3E2D] hover:text-[#55624C]"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/legacy-gallery"
              onClick={() => setIsOpen(false)}
              className={`text-[13px] font-semibold transition-colors py-1 ${
                pathname === "/legacy-gallery"
                  ? "text-[#55624C] md:border-b-2 md:border-[#55624C]"
                  : "text-[#2C3E2D] hover:text-[#55624C]"
              }`}
            >
              Legacy Gallery
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`text-[13px] font-semibold transition-colors py-1 ${
                pathname === "/contact"
                  ? "text-[#55624C] md:border-b-2 md:border-[#55624C]"
                  : "text-[#2C3E2D] hover:text-[#55624C]"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/view-demo"
              onClick={() => setIsOpen(false)}
              className={`text-[13px] font-semibold transition-colors py-1 ${
                pathname === "/view-demo"
                  ? "text-[#55624C] md:border-b-2 md:border-[#55624C]"
                  : "text-[#2C3E2D] hover:text-[#55624C]"
              }`}
            >
              View Demo
            </Link>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-4.5 pt-4 md:pt-0 border-t border-[#EBE4DD] md:border-t-0">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 bg-[#55624C] hover:bg-[#45503e] text-white text-[13px] font-semibold rounded-[5px] transition-all duration-200 text-center flex-1 md:flex-initial"
            >
              Begin Your Legacy
            </Link>
            <button className="w-9 h-9 rounded-full border border-[#D5CDCE] flex items-center justify-center text-[#7E8B77] hover:border-[#55624C] hover:text-[#55624C] hover:bg-[#EBE4DD]/20 transition-all duration-200 shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
