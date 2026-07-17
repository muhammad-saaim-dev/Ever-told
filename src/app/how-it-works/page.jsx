"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // tailwind lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const steps = [
    {
      title: "Create Your Account",
      description: "Sign up in minutes and tell us a little about yourself. This is the beginning of your legacy journey.",
      image: "/step1.png",
      icon: (
        <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
        </svg>
      )
    },
    {
      title: "Share Your Story",
      description: "Answer guided questions or have an AI interview to capture your life experiences, memories, values, and milestones.",
      image: "/step2.png",
      icon: (
        <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "Add Your Memories",
      description: "Upload photos, videos, documents, and voice recordings to bring your story to life.",
      image: "/step3.png",
      icon: (
        <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
    },
    {
      title: "We Craft Your Legacy Website",
      description: "Our team carefully designs your personalized legacy website that is beautiful, timeless, and uniquely yours.",
      image: "/step4.png",
      icon: (
        <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
    },
    {
      title: "Share With Your Loved Ones",
      description: "Invite family and friends to view, celebrate, and contribute to your story.",
      image: "/step5.png",
      icon: (
        <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 21c-2.243 0-4.32-.647-6.07-1.758a5.986 5.986 0 01-.167-1.018 3.393 3.393 0 012.217-2.907 4.125 4.125 0 015.39 3.064m5.717-5.366A4.815 4.815 0 0115 8.25c.054 0 .108.002.161.006a4.5 4.5 0 01-1.247 5.064m2.58-1.226a2.986 2.986 0 01-1.684-1.004M14.998 6.002a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM5.25 9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      title: "Your Legacy. Protected Forever.",
      description: "We securely preserve your story for generations to come, giving you peace of mind.",
      image: "/step6.png",
      icon: (
        <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#FBF9F6] pt-12 md:pt-20 lg:pt-32 pb-16 lg:pb-32">
        {/* Right Background Image Placeholder for large screens */}
        <div className={`absolute right-0 top-0 bottom-0 w-full lg:w-[50%] h-full hidden lg:block z-0`}>
          <div className="relative w-full h-full bg-[#EBE4DD]">
            {/* Smooth left-side gradient overlay that blends the media into the page background (always on top, click-through) */}
            <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-gradient-to-r from-[#FBF9F6] to-transparent z-10 pointer-events-none"></div>

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
              <Image src="/hero_how_it_works.png" alt="Grandfather and granddaughter" fill className="object-cover object-center" priority />
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pointer-events-none">
          <div className="w-full max-w-2xl lg:max-w-none relative z-20 pointer-events-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#55624C] uppercase">How It Works</span>
              <div className="h-[2px] w-12 bg-[#55624C]"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] text-[#2C3E2D] font-serif font-medium leading-[1.15] mb-6">
              <span>Preserving your story</span><br />
              <span className="text-[#7E8B77]">is simple and meaningful.</span>
            </h1>

            <div className="w-12 h-[2px] bg-[#55624C] mb-8"></div>

            <p className="text-base md:text-[17px] text-[#3D473B] font-semibold leading-relaxed mb-10">
              We guide you through every step to create a beautiful legacy that your family will treasure forever.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Link href="/contact" className="flex items-center gap-2 px-7 py-3.5 bg-[#55624C] hover:bg-[#45503e] text-white text-sm font-semibold uppercase tracking-wider rounded-[5px] shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex-shrink-0 whitespace-nowrap">
                Start Your Legacy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <button 
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#2C3E2D] hover:text-[#55624C] transition-colors group whitespace-nowrap"
              >
                <span className="w-11 h-11 rounded-full border border-[#EBE4DD] flex items-center justify-center bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#55624C]/30 flex-shrink-0">
                  <svg className="w-3.5 h-3.5 fill-[#2C3E2D] text-[#2C3E2D] ml-0.5 group-hover:fill-[#55624C] group-hover:text-[#55624C] transition-colors" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch 1-Minute Overview
              </button>
            </div>
          </div>

          {/* Mobile Image Placeholder */}
          <div className="w-full h-[300px] bg-[#EBE4DD] rounded-[8px] flex items-center justify-center lg:hidden relative overflow-hidden pointer-events-auto">
            {showVideo && isMobile ? (
              <div className="w-full h-full relative overflow-hidden bg-black">
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
              <Image src="/hero_how_it_works.png" alt="Grandfather and granddaughter" fill className="object-cover object-center" priority />
            )}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="pt-24 pb-0 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#55624C] uppercase mb-4 block">Our Simple Process</span>
            <h2 className="text-4xl font-serif font-medium text-[#2C3E2D] mb-6">Six steps to a legacy that lasts forever.</h2>
            <div className="w-16 h-[1px] bg-[#E8E1DA] mx-auto"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Center Vertical Line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[1px] bg-[#EBE4DD] -translate-x-1/2 z-10"></div>

            <div className="space-y-12 md:space-y-16 relative">
              {steps.map((step, index) => {
                const isEven = index % 2 !== 0; // 0, 2, 4 are odds (left text), 1, 3, 5 are evens (right text)

                return (
                  <div key={index} className="flex flex-col md:flex-row items-center justify-center w-full min-h-[220px] py-8 relative">

                    {/* Gap Fill Background (desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[128px] h-[calc(100%-64px)] bg-[#FBF9F6] border-y border-[#EBE4DD]/70 z-0"></div>

                    {/* Left Side (Image or Text Card) */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`w-full md:w-1/2 flex justify-end md:pr-16 mb-6 md:mb-0 min-w-0 relative z-10 ${!isEven ? "order-2 md:order-none" : "order-1 md:order-none"}`}
                    >
                      {!isEven ? (
                        // Image (Left side)
                        <div className="w-full max-w-[540px] h-[260px] bg-[#EBE4DD] rounded-[12px] flex items-center justify-center shadow-sm relative overflow-hidden">
                          <Image src={step.image} alt={step.title} fill className="object-cover" />
                        </div>
                      ) : (
                        // Text Content (Left side)
                        <div className="flex items-center gap-6 w-full max-w-[540px] min-h-[260px] bg-[#FBF9F6] border border-[#EBE4DD]/70 rounded-xl md:border-r-0 p-8 md:px-12 shadow-sm">
                          <div className="w-16 h-16 rounded-full border border-[#EBE4DD] flex items-center justify-center flex-shrink-0 bg-white">
                            {step.icon}
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-[22px] font-serif font-semibold text-[#2C3E2D] mb-2">{step.title}</h3>
                            <p className="text-[15px] text-[#5F6A5B] leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {/* Center Number Badge */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#55624C] text-white items-center justify-center font-serif text-lg z-20 border-4 border-white">
                      <span className="relative -top-[2px]">{index + 1}</span>
                    </div>

                    {/* Right Side (Text Card or Image) */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`w-full md:w-1/2 flex justify-start md:pl-16 min-w-0 relative z-10 ${!isEven ? "order-1 md:order-none" : "order-2 md:order-none"}`}
                    >
                      {!isEven ? (
                        // Text Content (Right side)
                        <div className="flex items-center gap-6 w-full max-w-[540px] min-h-[260px] bg-[#FBF9F6] border border-[#EBE4DD]/70 rounded-xl md:border-l-0 p-8 md:px-12 shadow-sm">
                          <div className="w-16 h-16 rounded-full border border-[#EBE4DD] flex items-center justify-center flex-shrink-0 bg-white">
                            {step.icon}
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-[22px] font-serif font-semibold text-[#2C3E2D] mb-2">{step.title}</h3>
                            <p className="text-[15px] text-[#5F6A5B] leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      ) : (
                        // Image (Right side)
                        <div className="w-full max-w-[540px] h-[260px] bg-[#EBE4DD] rounded-[12px] flex items-center justify-center shadow-sm relative overflow-hidden">
                          <Image src={step.image} alt={step.title} fill className="object-cover" />
                        </div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full bg-[#F6F4F1] rounded-[8px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#E8E1DA]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              <svg className="w-16 h-16 md:w-20 md:h-20 text-[#8C9885] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20L20 4" />
                <path d="M15 9C15 9 18 5 21 5C21 5 21 8 18 10C16 11.5 15 9 15 9Z" />
                <path d="M12 12C12 12 9 8 6 8C6 8 6 11 9 13C11 14.5 12 12 12 12Z" />
                <path d="M10 16C10 16 13 12 16 12C16 12 16 15 13 17C11 18.5 10 16 10 16Z" />
              </svg>
              <div>
                <h3 className="text-2xl md:text-[28px] font-serif font-medium text-[#2C3E2D] mb-2 leading-tight">Ready to begin <br className="hidden md:block" />your legacy journey?</h3>
                <p className="text-[14px] font-semibold text-[#5F6A5B]">It only takes a few minutes to get started.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto min-w-[200px]">
              <Link href="/contact" className="w-full bg-[#55624C] text-white text-center py-3.5 rounded-[3px] text-[13px] font-medium hover:bg-[#4A5546] transition-colors flex items-center justify-center gap-2">
                Begin Your Legacy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/pricing" className="w-full text-center text-[#55624C] text-[13px] font-medium hover:underline flex items-center justify-center gap-2">
                View Pricing Plans
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
