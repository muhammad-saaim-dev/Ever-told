import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F6] font-sans selection:bg-[#55624C] selection:text-white pb-0">
      {/* 1. Pricing Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#FBF9F6] pt-12 md:pt-20 lg:pt-24 pb-16 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Text Content */}
          <div className="lg:col-span-5 relative z-10">
            <div className="mb-4">
              <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#55624C] uppercase">
                Packages & Pricing
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[54px] text-[#2C3E2D] font-serif font-medium leading-[1.1] mb-6">
              Choose the legacy <br />
              that fits <span className="italic font-light text-[#55624C]">your story.</span>
            </h1>
            
            {/* Divider line */}
            <div className="w-12 h-[1px] bg-[#55624C] mb-8"></div>
            
            <p className="text-base md:text-[17px] text-[#3D473B] font-medium leading-relaxed max-w-md font-sans mb-10">
              Every life is unique. That's why we offer beautifully crafted packages to help you preserve your memories in the way that feels right for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div className="flex items-start gap-3 max-w-[200px]">
                <div className="mt-1 text-[#55624C]">
                  {/* Shield Check Icon */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <span className="text-[13px] text-[#4A5546] font-semibold leading-snug">Your memories are safe and secure</span>
              </div>
              <div className="flex items-start gap-3 max-w-[200px]">
                <div className="mt-1 text-[#55624C]">
                  {/* Heart Icon */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <span className="text-[13px] text-[#4A5546] font-semibold leading-snug">Created with care, preserved forever</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image (Desktop only, absolutely positioned for full bleed) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full z-0 pointer-events-none hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/pricing_hero_desk.png"
              alt="Vintage desk with photo and books"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-[center_center]"
            />
            {/* Gradient overlays to blend the image seamlessly */}
            <div className="absolute inset-y-0 left-0 w-[400px] bg-gradient-to-r from-[#FBF9F6] via-[#FBF9F6]/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FBF9F6] via-[#FBF9F6]/80 to-transparent" />
          </div>
        </div>
        
        {/* Mobile Image */}
        <div className="w-full h-64 relative mt-12 block lg:hidden">
            <Image
              src="/pricing_hero_desk.png"
              alt="Vintage desk with photo and books"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FBF9F6] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FBF9F6] to-transparent" />
        </div>
      </section>

      {/* 2. Pricing Cards Section */}
      <section className="relative w-full -mt-10 lg:-mt-24 z-20 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 items-end">
          
          {/* Card 1: Essential */}
          <div className="bg-[#FCFDFB] rounded-[3px] border border-[#E8E1DA] p-8 lg:p-10 flex flex-col relative transition-all duration-300 hover:shadow-lg shadow-sm w-full md:w-full mx-auto md:mx-0">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-medium text-[#2C3E2D] mb-3">Essential</h2>
              <p className="text-[13px] font-semibold text-[#4A5546] leading-relaxed mx-auto max-w-[200px]">A beautiful start to preserve your story.</p>
            </div>
            
            <div className="flex justify-center mb-6 text-[#7E8B77]">
              {/* Sprout icon */}
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0C9 13 4 15 4 9c0-3 3-5 5-5 3 0 5 4 5 7m0 0c3 0 8-2 8 4 0 6-5 8-8 8" />
              </svg>
            </div>
            
            <div className="text-center mb-2">
              <span className="text-4xl font-serif text-[#2C3E2D]">€499</span>
            </div>
            <div className="text-center mb-8">
              <span className="text-[12px] font-medium text-[#8C9885]">One-time payment</span>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-10 flex-grow">
              {['Personalized legacy website', 'Up to 10 pages', 'Photo gallery (Unlimited)', 'Life timeline', 'Basic story sections', 'Guestbook', 'Secure hosting'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-[18px] h-[18px] text-[#55624C] mt-[2px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[13.5px] font-medium text-[#4A5546]">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3.5 bg-transparent border border-[#55624C] text-[#55624C] font-semibold text-[13px] rounded-[3px] hover:bg-[#55624C] hover:text-white transition-colors duration-300">
              Choose Essential
            </button>
          </div>

          {/* Card 2: Signature (Most Popular) */}
          <div className="bg-[#FCFDFB] rounded-[3px] border border-[#55624C] pt-0 pb-8 px-8 lg:px-10 flex flex-col relative transition-all duration-300 shadow-xl w-full mx-auto md:mx-0 transform md:-translate-y-4 md:z-10">
            {/* Top Banner */}
            <div className="bg-[#55624C] text-white text-center py-2 -mx-8 lg:-mx-10 mb-8 rounded-t-[2px]">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Most Popular</span>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-medium text-[#2C3E2D] mb-3">Signature</h2>
              <p className="text-[13px] font-semibold text-[#4A5546] leading-relaxed mx-auto max-w-[200px]">Our most chosen package for a complete legacy experience.</p>
            </div>
            
            <div className="flex justify-center mb-6 text-[#7E8B77]">
              {/* Branch icon */}
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V5M12 12C9 12 5 15 5 10c0-3 3-5 5-5m2 10c3 0 7-3 7 2 0 3-3 5-5 5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16c2 0 4-1 4 2 0 2-2 3-4 3" />
              </svg>
            </div>
            
            <div className="text-center mb-2">
              <span className="text-4xl font-serif text-[#2C3E2D]">€999</span>
            </div>
            <div className="text-center mb-8">
              <span className="text-[12px] font-medium text-[#8C9885]">One-time payment</span>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-10 flex-grow">
              {['Everything in Essential', 'Up to 25 pages', 'Video & audio memories', 'AI Interview (Up to 2 hours)', 'Family tree (Basic)', 'Advanced customization', 'Priority support'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-[18px] h-[18px] text-[#55624C] mt-[2px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[13.5px] font-medium text-[#4A5546]">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3.5 bg-[#55624C] text-white font-semibold text-[13px] rounded-[3px] hover:bg-[#45503e] transition-colors duration-300 shadow-md">
              Choose Signature
            </button>
          </div>

          {/* Card 3: Legacy */}
          <div className="bg-[#FCFDFB] rounded-[3px] border border-[#E8E1DA] p-8 lg:p-10 flex flex-col relative transition-all duration-300 hover:shadow-lg shadow-sm w-full md:w-full mx-auto md:mx-0">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-medium text-[#2C3E2D] mb-3">Legacy</h2>
              <p className="text-[13px] font-semibold text-[#4A5546] leading-relaxed mx-auto max-w-[220px]">The most comprehensive way to preserve your life story.</p>
            </div>
            
            <div className="flex justify-center mb-6 text-[#7E8B77]">
              {/* Tree icon */}
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-7M12 14c-4 0-8-3-8-8 0-3 3-5 5-5 3 0 5 4 5 7m0 0c3 0 8-2 8 4 0 6-5 8-8 8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7c1 0 2-1 2 1s-1 2-2 2M15 7c-1 0-2-1-2 1s1 2 2 2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c1 0 2 1 2 2s-1 2-2 2" />
              </svg>
            </div>
            
            <div className="text-center mb-2">
              <span className="text-4xl font-serif text-[#2C3E2D]">€1,699</span>
            </div>
            <div className="text-center mb-8">
              <span className="text-[12px] font-medium text-[#8C9885]">One-time payment</span>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-10 flex-grow">
              {['Everything in Signature', 'Up to 50 pages', 'AI Interview (Up to 4 hours)', 'Professional storytelling assistance', 'Family tree (Advanced)', 'Legacy book (Printed, Premium)', 'Priority support & consultation'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-[18px] h-[18px] text-[#55624C] mt-[2px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[13.5px] font-medium text-[#4A5546]">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3.5 bg-transparent border border-[#55624C] text-[#55624C] font-semibold text-[13px] rounded-[3px] hover:bg-[#55624C] hover:text-white transition-colors duration-300">
              Choose Legacy
            </button>
          </div>

        </div>
      </section>

      {/* 3. Compare Features Section */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-3xl font-serif font-medium text-[#2C3E2D] mb-3">Compare Features</h2>
          <div className="w-14 h-[1px] bg-[#55624C] mx-auto opacity-80"></div>
        </div>

        <div className="w-full overflow-x-auto rounded-[3px] border border-[#E8E1DA] bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#F2EDE7] border-b border-[#E8E1DA]">
                <th className="py-4 px-6 text-[11px] font-bold tracking-[0.1em] text-[#2C3E2D] uppercase w-2/5">Features</th>
                <th className="py-4 px-6 text-[11px] font-bold tracking-[0.1em] text-[#2C3E2D] uppercase text-center w-1/5 border-l border-[#E8E1DA]">Essential</th>
                <th className="py-4 px-6 text-[11px] font-bold tracking-[0.1em] text-[#2C3E2D] uppercase text-center w-1/5 border-l border-[#E8E1DA]">Signature</th>
                <th className="py-4 px-6 text-[11px] font-bold tracking-[0.1em] text-[#2C3E2D] uppercase text-center w-1/5 border-l border-[#E8E1DA]">Legacy</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Personalized Legacy Website', icon: 'globe', e: true, s: true, l: true },
                { name: 'Photo Gallery', icon: 'image', e: 'Unlimited', s: 'Unlimited', l: 'Unlimited' },
                { name: 'Video & Audio Memories', icon: 'video', e: '-', s: true, l: true },
                { name: 'AI Interview', icon: 'mic', e: '-', s: 'Up to 2 hours', l: 'Up to 4 hours' },
                { name: 'Family Tree', icon: 'tree', e: '-', s: 'Basic', l: 'Advanced' },
                { name: 'Legacy Book (Printed)', icon: 'book', e: '-', s: '-', l: true },
                { name: 'Priority Support', icon: 'headphones', e: '-', s: true, l: true }
              ].map((row, idx) => (
                <tr key={idx} className={`border-b border-[#E8E1DA] last:border-0 transition-colors hover:bg-[#F2EDE7]/50 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FBF9F6]'}`}>
                  <td className="py-4 px-6 text-[13px] text-[#4A5546] font-semibold flex items-center gap-3">
                    <span className="text-[#55624C] opacity-80">
                      {/* Dynamic simple icons based on name for table */}
                      {row.icon === 'globe' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                      {row.icon === 'image' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>}
                      {row.icon === 'video' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>}
                      {row.icon === 'mic' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>}
                      {row.icon === 'tree' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15v4m0 0h18m-18 0l3-5m12 5l-3-5m-9 0h12m-12 0L9 5m6 5L9 5M9 5L5 9"></path></svg>}
                      {row.icon === 'book' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>}
                      {row.icon === 'headphones' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0l-2.121 2.121a6 6 0 00-8.486 0L5.636 5.636M15 15a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
                    </span>
                    {row.name}
                  </td>
                  <td className="py-4 px-6 text-[14px] text-center font-semibold text-[#4A5546] border-l border-[#E8E1DA]">
                    {row.e === true ? <div className="flex justify-center"><svg className="w-[20px] h-[20px] text-[#55624C]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg></div> : row.e}
                  </td>
                  <td className="py-4 px-6 text-[14px] text-center font-semibold text-[#4A5546] border-l border-[#E8E1DA]">
                    {row.s === true ? <div className="flex justify-center"><svg className="w-[20px] h-[20px] text-[#55624C]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg></div> : row.s}
                  </td>
                  <td className="py-4 px-6 text-[14px] text-center font-semibold text-[#4A5546] border-l border-[#E8E1DA]">
                    {row.l === true ? <div className="flex justify-center"><svg className="w-[20px] h-[20px] text-[#55624C]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg></div> : row.l}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Trust & Security Section */}
      <section className="relative w-full overflow-hidden bg-[#FBF9F6] border-y border-[#E8E1DA] pt-16 lg:pt-24 pb-32 lg:pb-40">
        {/* Right absolute image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 h-full z-0 pointer-events-none hidden lg:block opacity-90">
            <Image
              src="/pricing_couple.png"
              alt="Elderly couple reading a book together"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-left"
            />
            {/* Gradient mask */}
            <div className="absolute inset-y-0 left-0 w-[400px] bg-gradient-to-r from-[#FBF9F6] via-[#FBF9F6]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full lg:w-4/5">
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-start gap-12 lg:gap-20">
            {/* Security Text */}
            <div className="max-w-[280px] flex flex-col justify-center">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-[60px] h-[60px] rounded-full bg-[#F2EDE7] flex items-center justify-center text-[#55624C] shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3z" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-serif font-bold text-[#2C3E2D] leading-snug">Your memories are <br />our responsibility.</h3>
              </div>
              <p className="text-[14px] font-medium text-[#4A5546] leading-relaxed mb-5 pr-2">
                We use industry-leading security to keep your stories safe for generations to come.
              </p>
              <Link href="#" className="text-[14px] font-bold text-[#55624C] hover:text-[#2C3E2D] flex items-center gap-2 transition-colors">
                Learn More About Security
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
              </Link>
            </div>

            {/* 30-day guarantee badge */}
            <div className="bg-[#F6F4F1] border-2 border-[#D5CDCE] rounded-[8px] p-8 max-w-[340px] w-full text-center shadow-sm relative">
              <h4 className="text-[20px] font-serif font-bold text-[#2C3E2D] mb-3">30-Day Peace of Mind</h4>
              <p className="text-[13px] font-medium text-[#4A5546] leading-relaxed mb-6">
                Not sure yet? Take 30 days to explore and experience Ever Told. Love it, or we'll make it right.
              </p>
              <div className="mx-auto flex items-center justify-center text-[#D5CDCE] relative w-16 h-16">
                 <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                   {/* Left Laurel Branch */}
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 50 90 C 20 90 10 60 10 40 C 10 20 25 10 35 15" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 12 65 C 5 60 5 50 15 45" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 10 50 C 5 45 5 35 15 30" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 12 35 C 10 30 15 20 25 20" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 17 25 C 20 20 25 15 35 15" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 22 75 C 15 75 12 65 20 60" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 32 85 C 25 85 20 75 25 70" />

                   {/* Right Laurel Branch */}
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 50 90 C 80 90 90 60 90 40 C 90 20 75 10 65 15" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 88 65 C 95 60 95 50 85 45" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 90 50 C 95 45 95 35 85 30" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 88 35 C 90 30 85 20 75 20" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 83 25 C 80 20 75 15 65 15" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 78 75 C 85 75 88 65 80 60" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M 68 85 C 75 85 80 75 75 70" />
                 </svg>
                 <div className="flex flex-col items-center justify-center leading-none mt-[2px] z-10 text-[#55624C]">
                   <span className="text-[24px] font-bold">30</span>
                   <span className="text-[8px] font-bold tracking-[0.2em] uppercase">Days</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="w-full relative z-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 -mt-12 lg:-mt-20">
          <div className="bg-[#F6F4F1] border border-[#E8E1DA] rounded-[3px] py-6 px-8 md:py-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm relative z-20">
            <div className="flex items-center gap-6">
              <div className="text-[#55624C] shrink-0 opacity-80">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-[26px] font-serif font-bold text-[#2C3E2D] mb-2">Need help choosing the right package?</h3>
                <p className="text-[15px] font-medium text-[#4A5546]">We're here to help you create the perfect legacy.</p>
              </div>
            </div>
            <button className="px-6 py-3.5 bg-[#55624C] text-white font-semibold text-[13px] rounded-[3px] hover:bg-[#45503e] transition-colors duration-300 flex items-center gap-2 whitespace-nowrap shadow-sm">
              Talk to a Legacy Advisor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
