export default function Pricing() {
  const packages = [
    {
      name: "Essential",
      subtitle: "A beautiful start to preserve your story.",
      price: "499",
      popular: false,
      icon: (
        <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3a9 9 0 0 1 9 9M12 21a9 9 0 0 1-9-9" />
        </svg>
      ),
      features: [
        "Personalized legacy website",
        "Up to 10 pages",
        "Photo gallery (Unlimited)",
        "Life timeline",
        "Basic story sections",
        "Guestbook",
        "Secure hosting"
      ],
      buttonText: "Choose Essential",
    },
    {
      name: "Signature",
      subtitle: "Our most chosen package for a complete legacy experience.",
      price: "999",
      popular: true,
      icon: (
        <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c-.53 0-1.039.211-1.414.586L2.586 10.586a2 2 0 0 0 0 2.828l8 8a2 2 0 0 0 2.828 0l8-8a2 2 0 0 0 0-2.828l-8-8A2 2 0 0 0 12 2zM12 6v12M6 12h12" />
        </svg>
      ),
      features: [
        "Everything in Essential",
        "Up to 25 pages",
        "Video & audio memories",
        "AI Interview (Up to 2 hours)",
        "Family tree (Basic)",
        "Advanced customization",
        "Priority support"
      ],
      buttonText: "Choose Signature",
    },
    {
      name: "Legacy",
      subtitle: "The most comprehensive way to preserve your life story.",
      price: "1,699",
      popular: false,
      icon: (
        <svg className="w-8 h-8 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3a9 9 0 0 1 9 9M12 21a9 9 0 0 1-9-9" />
        </svg>
      ),
      features: [
        "Everything in Signature",
        "Up to 50 pages",
        "AI Interview (Up to 4 hours)",
        "Professional storytelling assistance",
        "Family tree (Advanced)",
        "Legacy book (Printed, Premium)",
        "Priority support & consultation"
      ],
      buttonText: "Choose Legacy",
    }
  ];

  return (
    <section id="packages" className="w-full bg-[#FBF9F6] py-16 md:py-24 border-b border-[#EBE4DD]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-sans font-bold tracking-[0.25em] text-[#4A5546] uppercase block">
            Packages & Pricing
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2D] font-medium leading-tight">
            Choose the legacy that fits your story.
          </h2>
          
          <div className="flex justify-center items-center py-2">
            <svg className="w-5 h-5 text-[#55624C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C7.589 2 4 5.589 4 10c0 4.411 3.589 8 8 8h1v2h2v-2h1c4.411 0 8-3.589 8-8 0-4.411-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
              <path d="M11 11h2v4h-2zm0-4h2v2h-2z" />
            </svg>
          </div>

          <p className="text-base md:text-lg text-[#3D473B] leading-relaxed font-sans font-medium max-w-2xl mx-auto">
            Every life is unique. That&apos;s why we offer beautifully crafted packages to help you preserve your memories in the way that feels right for you.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                pkg.popular 
                  ? "border-[#55624C] shadow-lg scale-102 z-10 md:-translate-y-2" 
                  : "border-[#EBE4DD] hover:border-[#55624C]/50 hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="bg-[#55624C] text-white text-[10px] tracking-widest uppercase font-semibold text-center py-1.5 w-full">
                  Most Popular
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex flex-col items-center flex-1">
                
                {/* Package Name & Subtitle */}
                <h3 className="font-serif text-2xl font-bold text-[#2C3E2D] mb-2">{pkg.name}</h3>
                <p className="text-xs text-[#3D473B] text-center min-h-[36px] max-w-[220px] font-sans font-semibold leading-relaxed mb-5">
                  {pkg.subtitle}
                </p>
                {/* Package Icon */}
                <div className="w-16 h-16 rounded-full bg-[#FBF9F6] flex items-center justify-center mb-6 border border-[#EBE4DD]/30">
                  {pkg.icon}
                </div>

                {/* Price */}
                <div className="text-center mb-6 w-full py-2">
                  <span className="font-serif text-4xl font-semibold text-[#2C3E2D]">
                    €{pkg.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#5F6A5B] block mt-3 font-sans">
                    One-time payment
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 w-full text-left flex-1 mb-2">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs text-[#2C3E2D]">
                      <svg className="w-4 h-4 text-[#55624C] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-sans font-semibold text-[#3D473B]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="p-6 pt-0 w-full">
                <button
                  className={`w-full py-3.5 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                    pkg.popular
                      ? "bg-[#55624C] text-white hover:bg-[#45503e] shadow-sm hover:shadow-md"
                      : "bg-[#FBF9F6] text-[#2C3E2D] border border-[#EBE4DD] hover:border-[#55624C] hover:bg-white"
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Guarantee */}
        <div className="flex items-center justify-center gap-2 mt-12 text-[#4A5546] text-sm font-sans font-semibold">
          <svg className="w-5 h-5 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          </svg>
          Your memories are safe and secure with industry-leading protection.
        </div>

      </div>
    </section>
  );
}
