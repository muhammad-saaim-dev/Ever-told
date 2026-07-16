"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LegacyGalleryPage() {
  const [activeTab, setActiveTab] = useState("All Stories");
  const [sortBy, setSortBy] = useState("Most Recent");

  const categories = [
    "All Stories",
    "Life Stories",
    "Family Legacies",
    "Milestone Celebrations",
    "In Loving Memory",
  ];

  const stories = [
    {
      id: 1,
      preTitle: "The Life of",
      title: "John William Thompson",
      date: "1938 - 2022",
      category: "Life Stories",
      image: "/step1.png",
      description: "A life filled with love, hard work, and a passion for helping others.",
    },
    {
      id: 2,
      preTitle: "The Journey of",
      title: "Margaret Eleanor Smith",
      date: "1941 - Present",
      category: "Life Stories",
      image: "/step2.png",
      description: "A story of kindness, strength, and a heart that touched many.",
    },
    {
      id: 3,
      preTitle: "A Love That Lasted",
      title: "Robert & Helen Davis",
      date: "Married 1955",
      category: "Family Legacies",
      image: "/step3.png",
      description: "Their beautiful journey together spanning more than six decades.",
    },
    {
      id: 4,
      preTitle: "The Anderson Family",
      title: "Three Generations",
      date: "",
      category: "Family Legacies",
      image: "/step4.png",
      description: "A legacy of love, faith, and family traditions.",
    },
    {
      id: 5,
      preTitle: "Lessons from a Teacher",
      title: "Edward James Wilson",
      date: "1940 - 2021",
      category: "In Loving Memory",
      image: "/step5.png",
      description: "A teacher, mentor, and friend who inspired generations.",
    },
    {
      id: 6,
      preTitle: "My Mother, My Hero",
      title: "Linda Marie Johnson",
      date: "1950 - 2018",
      category: "In Loving Memory",
      image: "/step6.png",
      description: "Her love was unconditional. Her lessons, unforgettable.",
    },
    {
      id: 7,
      preTitle: "Adventures Together",
      title: "James & Patricia Moore",
      date: "Married 1960",
      category: "Milestone Celebrations",
      image: "/pricing_couple.png",
      description: "A life of adventure, laughter, and unwavering partnership.",
    },
    {
      id: 8,
      preTitle: "A Life of Creativity",
      title: "Susan Elaine Harper",
      date: "1943 - Present",
      category: "Life Stories",
      image: "/pricing_hero_desk.png",
      description: "An artist, dreamer, and believer in the beauty of everyday life.",
    },
  ];

  // Filter stories based on active category tab
  const filteredStories = stories.filter(
    (story) => activeTab === "All Stories" || story.category === activeTab
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#FBF9F6] pt-12 md:pt-20 lg:pt-32 pb-16 lg:pb-32 border-b border-[#EBE4DD]">
        {/* Right Background Image for large screens */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[50%] h-full z-0 hidden lg:block">
          <div className="relative w-full h-full bg-[#EBE4DD]">
            <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-gradient-to-r from-[#FBF9F6] to-transparent z-10"></div>
            <Image
              src="/gallery_hero_table.png"
              alt="Legacy memory display"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="w-full max-w-2xl lg:max-w-none relative z-20">
            <div className="mb-6">
              <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#55624C] uppercase">
                Legacy Gallery
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] text-[#2C3E2D] font-serif font-medium leading-[1.15] mb-10">
              <span>Real Stories.</span>
              <br />
              <span className="text-[#2C3E2D]">
                Real <span className="text-[#55624C]">Legacies.</span>
              </span>
            </h1>

            <p className="text-base md:text-[17px] text-[#3D473B] font-semibold leading-relaxed mb-10">
              Browse examples of beautiful legacy websites created for families who chose to preserve
              what matters most.
            </p>

            {/* Unique & Timeless Block */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-[#D5CDCE] flex items-center justify-center text-[#55624C] flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] text-[#2C3E2D] font-bold">
                  Every story is unique.
                </span>
                <span className="text-[13px] text-[#2C3E2D] font-bold">
                  Every legacy is timeless.
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="w-full h-[300px] bg-[#EBE4DD] rounded-[8px] flex items-center justify-center lg:hidden relative overflow-hidden">
            <Image
              src="/gallery_hero_table.png"
              alt="Legacy memory display"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Filter navigation section */}
      <section className="bg-white border-b border-[#EBE4DD] pt-6 sticky top-[71px] z-40">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          {/* Categories Tab Bar */}
          <div className="flex items-center gap-6 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`text-[13px] font-semibold tracking-wide whitespace-nowrap pb-4 border-b-2 transition-all duration-200 -mb-[1px] ${
                  activeTab === category
                    ? "border-[#2C3E2D] text-[#2C3E2D]"
                    : "border-transparent text-[#5F6A5B] hover:text-[#2C3E2D]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-2 self-start md:self-auto mb-4 md:mb-4">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[#E8E1DA] rounded-[4px] py-1.5 pl-4 pr-10 text-[12px] font-semibold text-[#2C3E2D] focus:outline-none focus:border-[#55624C] cursor-pointer"
              >
                <option>Most Recent</option>
                <option>A - Z</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#5F6A5B]">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-[#FBF9F6]/30 pt-16 pb-2 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-[8px] overflow-hidden border border-[#E8E1DA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-[#EBE4DD] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Container */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Category pre-title */}
                  <span className="text-[12px] font-bold text-[#55624C] uppercase tracking-wider mb-1">
                    {story.preTitle}
                  </span>
                  
                  {/* Main Title */}
                  <h3 className="text-[19px] font-serif font-bold text-[#2C3E2D] leading-snug mb-1">
                    {story.title}
                  </h3>

                  {/* Dates / Subtitle */}
                  {story.date && (
                    <span className="text-[11px] font-bold text-[#55624C] uppercase tracking-widest mb-3 block">
                      {story.date}
                    </span>
                  )}
                  {!story.date && <div className="h-4 mb-3" />}

                  {/* Description */}
                  <p className="text-[13px] font-bold text-[#2C3E2D] leading-relaxed mb-6 flex-grow">
                    {story.description}
                  </p>

                  {/* View Link */}
                  <div className="pt-2 border-t border-[#F3EFEA]">
                    <Link
                      href="#"
                      className="text-[12px] font-bold text-[#55624C] hover:text-[#2C3E2D] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      View Legacy
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#5F6A5B] font-serif text-lg">No stories found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial Quote Banner */}
      <section className="bg-white py-2 px-6">
        <div className="max-w-5xl mx-auto relative rounded-[8px] overflow-hidden bg-[#F6F4F1] min-h-[180px] md:min-h-[220px] flex items-center border border-[#E8E1DA]">
          {/* Background image positioned to the right */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[65%] z-0">
            {/* Gradient overlay to fade image seamlessly into the left background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6F4F1] via-[#F6F4F1]/90 md:via-[#F6F4F1]/40 to-transparent z-10"></div>
            <Image
              src="/testimonial-bg.png"
              alt="Testimonial background"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Quote content */}
          <div className="relative z-10 p-8 md:p-12 w-full max-w-2xl flex gap-4 md:gap-5 items-start">
            <div className="text-[48px] leading-none text-[#55624C] font-serif font-bold select-none mt-1">
              “
            </div>
            <div>
              <p className="text-[17px] md:text-[19px] font-serif text-[#2C3E2D] leading-relaxed mb-4">
                Seeing my father's legacy website brought our entire family closer. It feels like he's still here, sharing his stories with us.
              </p>
              <span className="text-[13px] font-semibold text-[#5F6A5B] block">
                — Michael Thompson, Son
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reused Bottom CTA Section */}
      <section className="bg-white pt-2 pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#F6F4F1] rounded-[8px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#E8E1DA]">
          <div className="flex items-center gap-6">
            <svg
              className="w-16 h-16 md:w-20 md:h-20 text-[#8C9885] flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 20L20 4" />
              <path d="M15 9C15 9 18 5 21 5C21 5 21 8 18 10C16 11.5 15 9 15 9Z" />
              <path d="M12 12C12 12 9 8 6 8C6 8 6 11 9 13C11 14.5 12 12 12 12Z" />
              <path d="M10 16C10 16 13 12 16 12C16 12 16 15 13 17C11 18.5 10 16 10 16Z" />
            </svg>
            <div>
              <h3 className="text-2xl md:text-[28px] font-serif font-medium text-[#2C3E2D] mb-2 leading-tight">
                Your story deserves <br className="hidden md:block" />
                to be remembered beautifully.
              </h3>
              <p className="text-[14px] font-semibold text-[#5F6A5B]">
                Create a legacy that your{" "}
                <span className="font-bold text-[#55624C]">loved ones will cherish forever.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:mr-12 lg:mr-24">
            <Link
              href="/pricing"
              className="bg-[#55624C] flex-shrink-0 text-white px-6 py-3.5 rounded-[3px] text-[13px] font-medium flex items-center gap-2 hover:bg-[#4A5546] transition-colors whitespace-nowrap"
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
