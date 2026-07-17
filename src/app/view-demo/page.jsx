"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ViewDemoPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const carouselRef = useRef(null);

  const features = [
    {
      title: "Life Journey",
      description: "Share the chapters, milestones, and important moments that shaped your life.",
      icon: (
        <svg className="w-5 h-5 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    },
    {
      title: "Family & Heritage",
      description: "Celebrate your family, ancestors, and the legacy you leave behind.",
      icon: (
        <svg className="w-5 h-5 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.97 5.97 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 00 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      )
    },
    {
      title: "Photos & Videos",
      description: "Cherish memories, moments in time, and stories that words can't capture.",
      icon: (
        <svg className="w-5 h-5 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
    },
    {
      title: "Voice Memories",
      description: "Share your voice, stories, and wisdom for future generations to hear.",
      icon: (
        <svg className="w-5 h-5 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      )
    },
    {
      title: "Guestbook",
      description: "Family and friends can leave messages and share their memories of you.",
      icon: (
        <svg className="w-5 h-5 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
      )
    }
  ];

  const slides = [
    { name: "Home", image: "/step1.png" },
    { name: "Life Journey", image: "/step2.png" },
    { name: "Family", image: "/step3.png" },
    { name: "Memories", image: "/step4.png" },
    { name: "Guestbook", image: "/step5.png" },
    { name: "Timeline", image: "/step6.png" }
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
      
      let scrollTo;
      if (direction === "left") {
        scrollTo = scrollLeft - clientWidth / 2;
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollTo = 0; // Reset to start
        } else {
          scrollTo = scrollLeft + clientWidth / 2;
        }
      }
      
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      scroll("right");
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleScrollToCarousel = () => {
    const section = document.getElementById("demo-carousel");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FBF9F6] text-[#2C3E2D] font-sans selection:bg-[#55624C] selection:text-white pb-0">
      
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden pt-12 md:pt-16 pb-16 lg:pt-24 lg:pb-24">
        {/* Right Background Image for large screens */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full z-0 pointer-events-none hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/demo_laptop_mockup.png"
              alt="Ever Told legacy site running on a laptop"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-[right_center]"
            />
            {/* Gradient overlays to blend the image seamlessly */}
            <div className="absolute inset-y-0 left-0 w-[350px] bg-gradient-to-r from-[#FBF9F6] via-[#FBF9F6]/80 to-transparent" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Text Content */}
            <div className="lg:col-span-5 relative z-10 space-y-6">
              <div>
                <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#55624C] uppercase">
                  Example Legacy Website
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[54px] text-[#2C3E2D] font-serif font-medium leading-[1.1] mb-6">
                See how a legacy <br />
                comes to <span className="italic font-light text-[#55624C]">life.</span>
              </h1>
              
              <div className="w-12 h-[1px] bg-[#55624C]"></div>
              
              <p className="text-base md:text-[17px] text-[#4A5546] font-bold leading-relaxed max-w-md font-sans">
                Explore a real example of an Ever Told legacy website. Beautifully designed. Personal. Timeless. Created to honor a life and inspire generations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
                <button 
                  onClick={handleScrollToCarousel}
                  className="w-full sm:w-auto bg-[#55624C] hover:bg-[#45503e] text-white px-6 py-3.5 rounded-[3px] text-[13px] font-bold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Full Demo
                </button>
                
                <button className="w-full sm:w-auto group flex items-center justify-center gap-3 text-[13px] font-bold text-[#55624C] hover:opacity-80 transition-opacity whitespace-nowrap">
                  <div className="w-10 h-10 rounded-full border border-[#D5CDCE] flex items-center justify-center bg-white group-hover:border-[#55624C] transition-colors shrink-0">
                    <svg className="w-4.5 h-4.5 fill-[#55624C] text-[#55624C] ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  Watch 1-Minute Tour
                </button>
              </div>
            </div>

            {/* Spacer Column - Keeps grid aligned on Desktop */}
            <div className="lg:col-span-7 hidden lg:block" />

            {/* Mobile Image */}
            <div className="lg:hidden lg:col-span-7 relative z-10 w-full flex justify-center mt-4">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/demo_laptop_mockup.png"
                  alt="Ever Told legacy site running on a laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Highlight Banner & What's Inside Section */}
      <section className="w-full bg-white border-t border-[#EBE4DD] pb-10 px-6">
        {/* Highlight Banner (pulled up to overlap hero) */}
        <div className="max-w-5xl mx-auto relative z-20 -mt-2 md:-mt-4 lg:-mt-8 mb-8 md:mb-12">
          <div className="bg-[#F6F4F1] border border-[#E8E1DA] rounded-[8px] p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E8E1DA] shrink-0 text-[#55624C]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#2C3E2D]">
                Every legacy website is as unique as the life it celebrates.
              </h4>
              <p className="text-sm font-medium text-[#4A5546] leading-relaxed">
                This is a real example created using Ever Told. Your legacy website will be beautifully customized with your photos, stories, and memories.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#55624C] uppercase">
              What&apos;s Inside
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2D] font-medium leading-tight">
              A home for every part of your story.
            </h2>
            <div className="w-10 h-[2px] bg-[#55624C] mx-auto opacity-80"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Feature Items */}
            <div className="lg:col-span-5 flex flex-col border border-[#E8E1DA] rounded-[8px] overflow-hidden bg-[#FBF9F6]/50">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`flex items-start gap-5 p-5 border-b border-[#E8E1DA] last:border-b-0 transition-all duration-300 cursor-pointer ${
                    activeFeature === idx
                      ? "bg-white shadow-sm relative z-10"
                      : "hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-center justify-center shrink-0 mt-0.5 transform scale-125 text-[#55624C]">
                    {feature.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-[15px] font-bold text-[#2C3E2D] flex items-center justify-between">
                      {feature.title}
                      <svg className="w-3.5 h-3.5 text-[#7E8B77] opacity-60" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </h4>
                    <p className="text-[13px] text-[#5F6A5B] leading-relaxed font-medium mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Dynamic Featured Image */}
            <div className="lg:col-span-7 flex justify-center w-full h-full">
              <div className="w-full h-full min-h-[300px] bg-[#EBE4DD] rounded-[8px] flex items-center justify-center shadow-sm relative overflow-hidden">
                <Image
                  src="/demo_family_candle.png"
                  alt="Cozy nostalgic memory frame with candle"
                  fill
                  className="object-cover"
                />
                
                {/* Visual Overlay Quote */}
                <div className="absolute bottom-6 inset-x-6 z-10">
                  <div className="bg-[#1A1A1A]/70 backdrop-blur-md rounded-[6px] p-5 flex flex-col items-center text-center">
                    <p className="text-[13px] font-medium leading-[1.6] text-white/95 tracking-wide">
                      &ldquo;What we leave behind is not just what we had,<br />
                      but who we were and how we loved.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Experience the Demo (Slider) */}
      <section id="demo-carousel" className="w-full bg-white pt-0 pb-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center space-y-3 mb-16">
            <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#55624C] uppercase block">
              Experience the Demo
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2D] font-medium leading-tight">
              Browse through the legacy website
            </h2>
          </div>

          {/* Slider Wrapper */}
          <div className="relative group">
            {/* Scroll Navigation Arrows */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-[-20px] md:left-[-50px] top-[40%] -translate-y-1/2 w-12 h-12 rounded-full border border-[#D5CDCE] bg-white flex items-center justify-center text-[#55624C] hover:border-[#55624C] hover:bg-[#F2EDE7]/50 transition-colors shadow-sm z-10"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-[-20px] md:right-[-50px] top-[40%] -translate-y-1/2 w-12 h-12 rounded-full border border-[#D5CDCE] bg-white flex items-center justify-center text-[#55624C] hover:border-[#55624C] hover:bg-[#F2EDE7]/50 transition-colors shadow-sm z-10"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Carousel Slider Row */}
            <div
              ref={carouselRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2"
            >
              {[...slides, ...slides, ...slides].map((slide, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[calc(100%-32px)] sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(16.666%-20px)] snap-start flex flex-col group cursor-pointer"
                >
                  <div className="w-full aspect-[3/4] rounded-[8px] border border-[#F2EDE7] overflow-hidden relative shadow-sm group-hover:shadow-md transition-all duration-300 bg-[#FBF9F6]">
                    <Image
                      src={slide.image}
                      alt={`${slide.name} page preview`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-center font-bold text-[13px] text-[#4A5546] mt-5 uppercase tracking-wider font-sans">
                    {slide.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client Testimonial Quote Banner */}
      <section className="bg-white py-2 px-6">
        <div className="max-w-6xl mx-auto relative rounded-[8px] overflow-hidden bg-[#F6F4F1] min-h-[220px] md:min-h-[260px] flex items-center border border-[#E8E1DA]">
          {/* Background image positioned to the right */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[50%] z-0">
            {/* Gradient overlay to fade image seamlessly */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6F4F1] via-[#F6F4F1]/95 md:via-[#F6F4F1]/40 to-transparent z-10"></div>
            <Image
              src="/demo_quote_bg.png"
              alt="Cozy morning coffee scene next to an open book"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Quote content */}
          <div className="relative z-10 p-8 md:p-12 w-full max-w-2xl flex gap-4 md:gap-5 items-start">
            <div className="text-[48px] leading-none text-[#55624C] font-serif font-bold select-none mt-1">
              “
            </div>
            <div>
              <p className="text-[17px] md:text-[19px] font-serif text-[#2C3E2D] leading-relaxed mb-4 font-medium font-bold">
                Seeing Dad&apos;s legacy website brought tears to my eyes. It&apos;s more than a website &mdash; it&apos;s a gift for our family.
              </p>
              <span className="text-[13px] font-bold text-[#5F6A5B] block">
                &mdash; Sarah Thompson, Daughter
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Pre-Footer CTA */}
      <section className="bg-white pt-8 pb-24 px-6">
        <div className="max-w-6xl mx-auto bg-[#F6F4F1] rounded-[8px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#E8E1DA]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#D5CDCE] bg-white flex items-center justify-center text-[#55624C] flex-shrink-0 shadow-sm">
              <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-[28px] font-serif font-medium text-[#2C3E2D] mb-2 leading-tight">
                Ready to create a legacy website <br className="hidden md:block" />
                that will live on forever?
              </h3>
              <p className="text-[14px] font-bold text-[#5F6A5B]">
                It only takes a few minutes to begin.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 w-full md:w-auto md:mr-12 lg:mr-24 shrink-0">
            <Link
              href="/pricing"
              className="w-full md:w-auto bg-[#55624C] text-white px-6 py-3.5 rounded-[3px] text-[13px] font-medium flex items-center justify-center gap-2 hover:bg-[#4A5546] transition-colors whitespace-nowrap"
            >
              Begin Your Legacy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="text-[13px] font-bold text-[#55624C] hover:text-[#2C3E2D] transition-colors whitespace-nowrap"
            >
              View Pricing Plans →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
