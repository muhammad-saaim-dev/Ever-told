"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "I always wanted my children and grandchildren to know my story. Ever Told made it so easy. Now they will always have me with them.",
    author: "Margaret S., Legacy Creator"
  },
  {
    quote: "This is the most beautiful gift I have ever given my family. The process was seamless and the result is priceless.",
    author: "Robert D., Legacy Creator"
  },
  {
    quote: "Knowing that my voice will be heard for generations gives me such peace of mind. A truly wonderful experience.",
    author: "Eleanor W., Legacy Creator"
  },
  {
    quote: "The team at Ever Told handled my memories with such care and respect. I couldn't be happier with my legacy book.",
    author: "James L., Legacy Creator"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 400); // Wait 400ms before showing the next quote
    }, 4000); // 4 seconds total interval for better reading time
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (idx) => {
    if (idx === currentIndex) return;
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(idx);
      setFade(true);
    }, 400);
  };

  return (
    <section className="w-full">
      {/* Testimonial Quote Section with Background Image */}
      <div 
        className="relative w-full py-12 md:py-16 bg-cover bg-center flex items-center justify-center overflow-hidden transition-all duration-500"
        style={{ backgroundImage: "url('/testimonial-bg.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#2C3E2D]/85 mix-blend-multiply"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-2 min-h-[180px] flex flex-col justify-center pt-8">
          {/* Quote Mark */}
          <span className="font-serif text-8xl md:text-[100px] text-white block leading-[0.3] drop-shadow-md">
            “
          </span>

          <div className={`transition-opacity duration-500 min-h-[80px] flex flex-col justify-center ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-medium max-w-[540px] mx-auto italic">
              {testimonials[currentIndex].quote}
            </p>
          </div>

          <span className={`text-[10px] md:text-[11px] font-sans font-semibold tracking-[0.2em] text-[#EBE4DD] uppercase block pt-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            — {testimonials[currentIndex].author}
          </span>

          {/* Slider Dots */}
          <div className="flex justify-center items-center gap-2 pt-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Trust & Pre-Footer Section */}
      <div className="w-full bg-white pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full bg-[#FBF9F6] rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Trust Items Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
            
            {/* Guarantee 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-4 flex items-center justify-center text-[#55624C]">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 13.5c1.5 0 2.5-1 3.5-2.5 1-1.5 2-2.5 3.5-2.5-1.5 0-2.5 1-3.5 2.5-1 1.5-2 2.5-3.5 2.5z"/>
                </svg>
              </div>
              <h4 className="font-serif text-base font-bold text-[#2C3E2D] mb-2">30-Day Peace of Mind</h4>
              <p className="text-xs text-[#5F6A5B] leading-relaxed max-w-[280px] md:max-w-[220px] font-sans font-medium">
                Not sure yet? Take 30 days to explore and experience Ever Told.
              </p>
            </div>

            {/* Guarantee 2 */}
            <div className="flex flex-col items-center text-center px-4 border-y md:border-y-0 md:border-x border-[#EBE4DD] py-8 md:py-0">
              <div className="mb-4 flex items-center justify-center text-[#55624C]">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <rect x="6" y="11" width="12" height="10" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0v4" />
                  <circle cx="12" cy="15" r="1.5" />
                  <path strokeLinecap="round" d="M12 16.5v2" />
                </svg>
              </div>
              <h4 className="font-serif text-base font-bold text-[#2C3E2D] mb-2">Secure & Private</h4>
              <p className="text-xs text-[#5F6A5B] leading-relaxed max-w-[280px] md:max-w-[220px] font-sans font-medium">
                We use bank-level security to keep your story safe.
              </p>
            </div>

            {/* Guarantee 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-4 flex items-center justify-center text-[#55624C]">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12V9a6 6 0 1112 0v3" />
                  <rect x="4" y="11" width="4" height="6" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="16" y="11" width="4" height="6" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 17v2a3 3 0 01-3 3h-3" />
                  <circle cx="11" cy="22" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h4 className="font-serif text-base font-bold text-[#2C3E2D] mb-2">Here to Help</h4>
              <p className="text-xs text-[#5F6A5B] leading-relaxed max-w-[280px] md:max-w-[220px] font-sans font-medium">
                Our legacy advisors are here whenever you need us.
              </p>
            </div>

          </div>

          {/* CTA Box Column */}
          <div className="lg:col-span-4 bg-[#55624C] rounded-2xl p-8 flex flex-col justify-between items-center lg:items-start text-center lg:text-left text-white shadow-md">
            <h3 className="font-serif text-lg md:text-xl font-medium leading-relaxed max-w-[280px] lg:max-w-[240px] mb-6">
              Ready to create a legacy that lasts forever?
            </h3>
            
            <div className="w-full space-y-4">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-[#55624C] hover:bg-[#EBE4DD] text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all duration-300"
              >
                Begin Your Legacy
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </Link>
              
              <Link 
                href="#packages"
                className="block text-center text-xs font-semibold uppercase tracking-widest hover:text-[#EBE4DD] transition-colors"
              >
                View All Packages &rarr;
              </Link>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
