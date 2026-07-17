"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FBF9F6]">
      {/* Right Column - Image or Video (Desktop only, absolutely positioned for full bleed) */}
      <div className={`absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full hidden lg:block z-0`}>
        <div className="relative w-full h-full bg-[#EBE4DD]">
          {/* Gradient overlays to blend the media seamlessly (always on top) */}
          <div className="absolute inset-y-0 left-0 w-[350px] bg-gradient-to-r from-[#FBF9F6] via-[#FBF9F6]/80 to-transparent z-10 pointer-events-none" />

          {showVideo && !isMobile ? (
            <div className="w-full h-full relative z-0 overflow-hidden bg-black">
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-30 bg-black/60 hover:bg-black text-white px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md border border-white/10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                Close Video
              </button>
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <iframe 
                  className="w-[150%] h-[150%] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[15%]"
                  src="https://www.youtube.com/embed/fYImnOiz2_8?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1"
                  title="Ever Told - A Home for Every Legacy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <Image
              src="/hero-legacy.png"
              alt="Grandfather and granddaughter exploring a vintage photo album together"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-[right_center]"
            />
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-12 md:py-20 lg:py-24 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-6 space-y-8 max-w-2xl pointer-events-auto">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[70px] leading-[1.1] text-[#2C3E2D] font-medium tracking-tight">
                Every Life Has <br />
                a Story Worth <br />
                <span className="italic text-[#55624C] font-normal">Remembering.</span>
              </h1>
              
              {/* Small decorative leaf divider */}
              <div className="flex items-center gap-3 pt-2">
                <div className="h-[1px] w-12 bg-[#55624C]/40"></div>
                <svg className="w-4 h-4 text-[#55624C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 12v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <div className="h-[1px] w-12 bg-[#55624C]/40"></div>
              </div>
            </div>

            <p className="text-base md:text-lg text-[#3D473B] leading-relaxed max-w-xl font-sans font-medium">
              Ever Told helps you preserve your memories, photos, and life experiences in a beautiful digital legacy that inspires future generations.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-7 py-3.5 bg-[#55624C] hover:bg-[#45503e] text-white text-sm font-semibold uppercase tracking-wider rounded-[5px] shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Begin Your Legacy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </Link>

              <button 
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#2C3E2D] hover:text-[#55624C] transition-colors group"
              >
                <span className="w-11 h-11 rounded-full border border-[#EBE4DD] flex items-center justify-center bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#55624C]/30">
                  <svg className="w-3.5 h-3.5 fill-[#2C3E2D] text-[#2C3E2D] ml-0.5 group-hover:fill-[#55624C] group-hover:text-[#55624C] transition-colors" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Our Story
              </button>
            </div>

            {/* Inline Image or Video for Mobile/Tablet */}
            <div className="block lg:hidden mt-8 w-full relative aspect-[4/3] overflow-hidden bg-[#EBE4DD] rounded-[8px] pointer-events-auto">
              {showVideo && isMobile ? (
                <div className="w-full h-full relative overflow-hidden bg-black z-20">
                  <button 
                    onClick={() => setShowVideo(false)}
                    className="absolute top-2 right-2 z-30 bg-black/60 hover:bg-black text-white px-2.5 py-1.5 rounded-full text-[10px] font-semibold flex items-center gap-1 transition-colors shadow-md border border-white/10"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    Close
                  </button>
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <iframe 
                      className="w-[170%] h-[170%] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[20%]"
                      src="https://www.youtube.com/embed/fYImnOiz2_8?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1"
                      title="Ever Told - A Home for Every Legacy"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src="/hero-legacy.png"
                    alt="Grandfather and granddaughter exploring a vintage photo album together"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#FBF9F6] to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#FBF9F6] to-transparent pointer-events-none" />
                </>
              )}
            </div>
          </div>

          {/* Spacer Column - Keeps grid aligned on Desktop */}
          <div className="lg:col-span-6 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
