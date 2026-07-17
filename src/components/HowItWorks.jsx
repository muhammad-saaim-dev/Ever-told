export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Share Your Story",
      description: "Answer thoughtful questions about your life and experiences.",
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-[#2C3E2D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Add Your Memories",
      description: "Upload photos, videos, documents, and audio that bring your story to life.",
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-[#2C3E2D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Invite Your Family",
      description: "Invite loved ones to contribute memories and become part of your legacy.",
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-[#2C3E2D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      number: "4",
      title: "Create Your Legacy",
      description: "We design your beautiful digital legacy website for generations to cherish.",
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-[#2C3E2D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#FBF9F6] py-4 md:py-8 border-b border-[#EBE4DD]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-6">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#4A5546] uppercase block">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2D] font-semibold leading-tight">
            Preserving Your Legacy is Simple
          </h2>
          <div className="w-10 h-[2px] bg-[#4A5546] mx-auto"></div>
        </div>

        {/* Steps Flex/Grid */}
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4 max-w-7xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-row items-start text-left relative group w-full">
              
              {/* Step Circle Icon */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#EBE4DD]/60 flex items-center justify-center mr-4 mt-1">
                {step.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col pr-4 lg:pr-6">
                <h3 className="font-serif text-sm md:text-base font-bold text-[#2C3E2D] mb-1.5">
                  {step.number}. {step.title}
                </h3>
                <p className="text-[11px] md:text-xs text-[#4A5546] leading-relaxed max-w-[280px] lg:max-w-[220px] font-sans font-medium">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow for larger screens */}
              {idx > 0 && (
                <div className="hidden lg:flex absolute -left-6 top-8 -translate-y-1/2 text-[#8A8F85]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
